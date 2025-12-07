// words.js - 核心词库文件
// 格式说明：{en: "英文单词", zh: "中文释义"}

module.exports = {
    // 📚 词库 1：小学全能词库 (已为您扩充至 200+ 核心词汇)
    elementary: [
        // --- 动物 (Animals) ---
        {en:"cat",zh:"猫"}, {en:"dog",zh:"狗"}, {en:"pig",zh:"猪"}, {en:"duck",zh:"鸭子"},
        {en:"rabbit",zh:"兔子"}, {en:"horse",zh:"马"}, {en:"elephant",zh:"大象"}, {en:"ant",zh:"蚂蚁"},
        {en:"fish",zh:"鱼"}, {en:"bird",zh:"鸟"}, {en:"eagle",zh:"鹰"}, {en:"beaver",zh:"海狸"},
        {en:"snake",zh:"蛇"}, {en:"mouse",zh:"老鼠"}, {en:"kangaroo",zh:"袋鼠"}, {en:"monkey",zh:"猴子"},
        {en:"panda",zh:"熊猫"}, {en:"bear",zh:"熊"}, {en:"lion",zh:"狮子"}, {en:"tiger",zh:"老虎"},
        {en:"fox",zh:"狐狸"}, {en:"zebra",zh:"斑马"}, {en:"deer",zh:"鹿"}, {en:"giraffe",zh:"长颈鹿"},
        {en:"goose",zh:"鹅"}, {en:"hen",zh:"母鸡"}, {en:"turkey",zh:"火鸡"}, {en:"lamb",zh:"小羊"},
        {en:"sheep",zh:"绵羊"}, {en:"goat",zh:"山羊"}, {en:"cow",zh:"奶牛"}, {en:"shark",zh:"鲨鱼"},
        {en:"seal",zh:"海豹"}, {en:"whale",zh:"鲸鱼"}, {en:"dolphin",zh:"海豚"}, {en:"octopus",zh:"章鱼"},
        
        // --- 食物 (Food & Drink) ---
        {en:"apple",zh:"苹果"}, {en:"banana",zh:"香蕉"}, {en:"pear",zh:"梨"}, {en:"orange",zh:"橙子"},
        {en:"grape",zh:"葡萄"}, {en:"lemon",zh:"柠檬"}, {en:"peach",zh:"桃子"}, {en:"melon",zh:"瓜"},
        {en:"cake",zh:"蛋糕"}, {en:"bread",zh:"面包"}, {en:"egg",zh:"鸡蛋"}, {en:"milk",zh:"牛奶"},
        {en:"water",zh:"水"}, {en:"juice",zh:"果汁"}, {en:"tea",zh:"茶"}, {en:"coffee",zh:"咖啡"},
        {en:"rice",zh:"米饭"}, {en:"noodle",zh:"面条"}, {en:"meat",zh:"肉"}, {en:"fish",zh:"鱼肉"},
        {en:"chicken",zh:"鸡肉"}, {en:"beef",zh:"牛肉"}, {en:"pork",zh:"猪肉"}, {en:"tofu",zh:"豆腐"},
        {en:"candy",zh:"糖果"}, {en:"cookie",zh:"饼干"}, {en:"pie",zh:"派"}, {en:"ice",zh:"冰"},
        {en:"cream",zh:"奶油"}, {en:"honey",zh:"蜂蜜"}, {en:"salt",zh:"盐"}, {en:"sugar",zh:"糖"},

        // --- 家庭与人物 (Family & People) ---
        {en:"father",zh:"父亲"}, {en:"mother",zh:"母亲"}, {en:"brother",zh:"兄弟"}, {en:"sister",zh:"姐妹"},
        {en:"grandpa",zh:"爷爷"}, {en:"grandma",zh:"奶奶"}, {en:"uncle",zh:"叔叔"}, {en:"aunt",zh:"阿姨"},
        {en:"boy",zh:"男孩"}, {en:"girl",zh:"女孩"}, {en:"baby",zh:"婴儿"}, {en:"man",zh:"男人"},
        {en:"woman",zh:"女人"}, {en:"friend",zh:"朋友"}, {en:"teacher",zh:"老师"}, {en:"student",zh:"学生"},
        {en:"doctor",zh:"医生"}, {en:"nurse",zh:"护士"}, {en:"driver",zh:"司机"}, {en:"farmer",zh:"农民"},
        {en:"cook",zh:"厨师"}, {en:"police",zh:"警察"}, {en:"king",zh:"国王"}, {en:"queen",zh:"女王"},

        // --- 学校与文具 (School) ---
        {en:"school",zh:"学校"}, {en:"class",zh:"班级"}, {en:"grade",zh:"年级"}, {en:"book",zh:"书"},
        {en:"bag",zh:"书包"}, {en:"pen",zh:"钢笔"}, {en:"pencil",zh:"铅笔"}, {en:"ruler",zh:"尺子"},
        {en:"eraser",zh:"橡皮"}, {en:"desk",zh:"书桌"}, {en:"chair",zh:"椅子"}, {en:"map",zh:"地图"},
        {en:"blackboard",zh:"黑板"}, {en:"computer",zh:"电脑"}, {en:"paper",zh:"纸"}, {en:"picture",zh:"图片"},

        // --- 身体部位 (Body) ---
        {en:"head",zh:"头"}, {en:"face",zh:"脸"}, {en:"hair",zh:"头发"}, {en:"eye",zh:"眼睛"},
        {en:"ear",zh:"耳朵"}, {en:"nose",zh:"鼻子"}, {en:"mouth",zh:"嘴巴"}, {en:"tooth",zh:"牙齿"},
        {en:"neck",zh:"脖子"}, {en:"arm",zh:"胳膊"}, {en:"hand",zh:"手"}, {en:"finger",zh:"手指"},
        {en:"leg",zh:"腿"}, {en:"foot",zh:"脚"}, {en:"knee",zh:"膝盖"}, {en:"toe",zh:"脚趾"},

        // --- 自然与环境 (Nature) ---
        {en:"sun",zh:"太阳"}, {en:"moon",zh:"月亮"}, {en:"star",zh:"星星"}, {en:"sky",zh:"天空"},
        {en:"cloud",zh:"云"}, {en:"rain",zh:"雨"}, {en:"snow",zh:"雪"}, {en:"wind",zh:"风"},
        {en:"tree",zh:"树"}, {en:"flower",zh:"花"}, {en:"grass",zh:"草"}, {en:"river",zh:"河"},
        {en:"lake",zh:"湖"}, {en:"sea",zh:"海"}, {en:"hill",zh:"小山"}, {en:"forest",zh:"森林"},
        {en:"park",zh:"公园"}, {en:"garden",zh:"花园"}, {en:"farm",zh:"农场"}, {en:"zoo",zh:"动物园"},

        // --- 动作 (Verbs) ---
        {en:"run",zh:"跑"}, {en:"jump",zh:"跳"}, {en:"walk",zh:"走"}, {en:"swim",zh:"游泳"},
        {en:"fly",zh:"飞"}, {en:"sing",zh:"唱"}, {en:"dance",zh:"跳舞"}, {en:"draw",zh:"画"},
        {en:"read",zh:"读"}, {en:"write",zh:"写"}, {en:"eat",zh:"吃"}, {en:"drink",zh:"喝"},
        {en:"sleep",zh:"睡觉"}, {en:"play",zh:"玩"}, {en:"sit",zh:"坐"}, {en:"stand",zh:"站"},
        {en:"open",zh:"打开"}, {en:"close",zh:"关闭"}, {en:"look",zh:"看"}, {en:"listen",zh:"听"},
        {en:"help",zh:"帮助"}, {en:"make",zh:"制作"}, {en:"go",zh:"去"}, {en:"come",zh:"来"},

        // --- 颜色 (Colors) ---
        {en:"red",zh:"红色"}, {en:"blue",zh:"蓝色"}, {en:"yellow",zh:"黄色"}, {en:"green",zh:"绿色"},
        {en:"black",zh:"黑色"}, {en:"white",zh:"白色"}, {en:"orange",zh:"橙色"}, {en:"purple",zh:"紫色"},
        {en:"brown",zh:"棕色"}, {en:"pink",zh:"粉色"}, {en:"gray",zh:"灰色"}, {en:"gold",zh:"金色"},

        // --- 形容词 (Adjectives) ---
        {en:"good",zh:"好的"}, {en:"bad",zh:"坏的"}, {en:"big",zh:"大的"}, {en:"small",zh:"小的"},
        {en:"long",zh:"长的"}, {en:"short",zh:"短的"}, {en:"tall",zh:"高的"}, {en:"fat",zh:"胖的"},
        {en:"thin",zh:"瘦的"}, {en:"new",zh:"新的"}, {en:"old",zh:"旧的"}, {en:"young",zh:"年轻"},
        {en:"hot",zh:"热的"}, {en:"cold",zh:"冷的"}, {en:"warm",zh:"暖的"}, {en:"cool",zh:"凉爽"},
        {en:"happy",zh:"快乐"}, {en:"sad",zh:"悲伤"}, {en:"tired",zh:"累的"}, {en:"hungry",zh:"饿的"}
    ],

    // 🐍 词库 2：Python 编程词库
    python: [
        {en:"print",zh:"打印输出"}, {en:"return",zh:"返回"}, {en:"class",zh:"类定义"}, {en:"def",zh:"函数定义"},
        {en:"import",zh:"导入模块"}, {en:"from",zh:"从...导入"}, {en:"if",zh:"如果"}, {en:"else",zh:"否则"},
        {en:"elif",zh:"否则如果"}, {en:"for",zh:"循环遍历"}, {en:"while",zh:"当...循环"}, {en:"break",zh:"中断循环"},
        {en:"continue",zh:"跳过本次"}, {en:"pass",zh:"占位符"}, {en:"try",zh:"尝试执行"}, {en:"except",zh:"捕获异常"},
        {en:"finally",zh:"最终执行"}, {en:"raise",zh:"抛出异常"}, {en:"with",zh:"上下文管理"}, {en:"as",zh:"作为"},
        {en:"lambda",zh:"匿名函数"}, {en:"global",zh:"全局变量"}, {en:"nonlocal",zh:"外层变量"}, {en:"assert",zh:"断言"},
        {en:"True",zh:"真"}, {en:"False",zh:"假"}, {en:"None",zh:"空值"}, {en:"and",zh:"逻辑与"},
        {en:"or",zh:"逻辑或"}, {en:"not",zh:"逻辑非"}, {en:"is",zh:"身份判断"}, {en:"in",zh:"成员判断"},
        {en:"range",zh:"范围生成"}, {en:"len",zh:"获取长度"}, {en:"list",zh:"列表"}, {en:"dict",zh:"字典"},
        {en:"set",zh:"集合"}, {en:"tuple",zh:"元组"}, {en:"int",zh:"整数"}, {en:"float",zh:"浮点数"},
        {en:"str",zh:"字符串"}, {en:"bool",zh:"布尔值"}, {en:"open",zh:"打开文件"}, {en:"input",zh:"输入"}
    ]
};