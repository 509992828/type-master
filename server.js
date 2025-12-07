const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // 引入路径模块

const app = express();
const PORT = 3003; 

app.use(cors());
app.use(bodyParser.json());

// --- 新增：让服务器能够提供 index.html ---
// 1. 设置静态文件目录 (允许直接访问同目录下的文件)
app.use(express.static(__dirname));

// 2. 当访问根目录 '/' 时，发送 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// ---------------------------------------

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('DB Error:', err.message);
    else console.log('Connected to SQLite');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        wpm INTEGER,
        acc TEXT,
        count INTEGER,
        timestamp TEXT,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS stats (
        user_id INTEGER PRIMARY KEY,
        totalRounds INTEGER DEFAULT 0,
        totalTime INTEGER DEFAULT 0,
        totalWords INTEGER DEFAULT 0,
        maxCombo INTEGER DEFAULT 0,
        totalPerfectRounds INTEGER DEFAULT 0,
        totalKeystrokes INTEGER DEFAULT 0,
        unlocked_badges TEXT DEFAULT '[]'
    )`);
});

app.post('/api/login', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name required' });

    db.get("SELECT * FROM users WHERE name = ?", [name], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (row) {
            db.get("SELECT * FROM stats WHERE user_id = ?", [row.id], (err, stats) => {
                res.json({ user: row, stats: stats || {} });
            });
        } else {
            db.run("INSERT INTO users (name) VALUES (?)", [name], function(err) {
                if (err) return res.status(500).json({ error: err.message });
                const userId = this.lastID;
                db.run("INSERT INTO stats (user_id) VALUES (?)", [userId]);
                res.json({ user: { id: userId, name }, stats: { totalRounds:0, unlocked_badges:'[]' } });
            });
        }
    });
});

app.post('/api/save', (req, res) => {
    const { userId, record, stats } = req.body;
    
    db.serialize(() => {
        db.run(`INSERT INTO history (user_id, wpm, acc, count, timestamp) VALUES (?, ?, ?, ?, ?)`,
            [userId, record.wpm, record.acc, record.count, record.time]);

        db.run(`INSERT OR REPLACE INTO stats (user_id, totalRounds, totalTime, totalWords, maxCombo, totalPerfectRounds, totalKeystrokes, unlocked_badges) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, stats.totalRounds, stats.totalTime, stats.totalWords, stats.maxCombo, stats.totalPerfectRounds, stats.totalKeystrokes, JSON.stringify(stats.unlocked)],
            (err) => {
                if (err) res.status(500).send(err.message);
                else res.json({ success: true });
            }
        );
    });
});

app.get('/api/history/:userId', (req, res) => {
    db.all("SELECT * FROM history WHERE user_id = ? ORDER BY id DESC LIMIT 50", [req.params.userId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});