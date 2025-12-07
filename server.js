const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// 引入词库
const wordBanksData = require('./words');

const app = express();
const PORT = 3003; 

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// 获取词库接口
app.get('/api/wordbanks', (req, res) => {
    res.json(wordBanksData);
});

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('DB Error:', err.message);
    else console.log('Connected to SQLite');
});

// 初始化数据库 (包含头像 avatar 和 最高速度 max_wpm)
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE,
        avatar TEXT DEFAULT '🐶',
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
        max_wpm INTEGER DEFAULT 0,
        totalPerfectRounds INTEGER DEFAULT 0,
        totalKeystrokes INTEGER DEFAULT 0,
        unlocked_badges TEXT DEFAULT '[]'
    )`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 登录/注册 (支持头像)
app.post('/api/login', (req, res) => {
    const { name, avatar } = req.body;
    if (!name) return res.status(400).json({ error: 'Name required' });

    db.get("SELECT * FROM users WHERE name = ?", [name], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (row) {
            // 更新头像
            if (avatar && row.avatar !== avatar) {
                db.run("UPDATE users SET avatar = ? WHERE id = ?", [avatar, row.id]);
                row.avatar = avatar;
            }
            db.get("SELECT * FROM stats WHERE user_id = ?", [row.id], (err, stats) => {
                res.json({ user: row, stats: stats || {} });
            });
        } else {
            const userAvatar = avatar || '🐶';
            db.run("INSERT INTO users (name, avatar) VALUES (?, ?)", [name, userAvatar], function(err) {
                if (err) return res.status(500).json({ error: err.message });
                const userId = this.lastID;
                db.run("INSERT INTO stats (user_id) VALUES (?)", [userId]);
                res.json({ user: { id: userId, name, avatar: userAvatar }, stats: { totalRounds:0, unlocked_badges:'[]' } });
            });
        }
    });
});

// 获取所有用户
app.get('/api/users', (req, res) => {
    db.all("SELECT id, name, avatar FROM users ORDER BY created_at DESC", (err, rows) => {
        if (err) return res.status(500).json([]);
        res.json(rows);
    });
});

// 保存成绩 (更新 max_wpm)
app.post('/api/save', (req, res) => {
    const { userId, record, stats } = req.body;
    db.serialize(() => {
        db.run(`INSERT INTO history (user_id, wpm, acc, count, timestamp) VALUES (?, ?, ?, ?, ?)`,
            [userId, record.wpm, record.acc, record.count, record.time]);

        db.run(`INSERT OR REPLACE INTO stats (user_id, totalRounds, totalTime, totalWords, maxCombo, max_wpm, totalPerfectRounds, totalKeystrokes, unlocked_badges) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, stats.totalRounds, stats.totalTime, stats.totalWords, stats.maxCombo, stats.max_wpm, stats.totalPerfectRounds, stats.totalKeystrokes, JSON.stringify(stats.unlocked)],
            (err) => {
                if (err) res.status(500).send(err.message);
                else res.json({ success: true });
            }
        );
    });
});

// 获取历史
app.get('/api/history/:userId', (req, res) => {
    db.all("SELECT * FROM history WHERE user_id = ? ORDER BY id DESC LIMIT 50", [req.params.userId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// 获取排行榜 (PK榜)
app.get('/api/leaderboard', (req, res) => {
    const query = `
        SELECT u.name, u.avatar, s.max_wpm, s.totalWords, s.totalPerfectRounds
        FROM stats s
        JOIN users u ON s.user_id = u.id
    `;
    db.all(query, (err, rows) => {
        if (err) return res.status(500).json([]);
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});