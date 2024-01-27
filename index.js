const express = require('express');
const app = express();

// 创建一个路由器实例
const router = express.Router();

// 定义路由
router.get('/hello', (req, res) => {
    // 假设的逻辑
    res.send('hello 123');
});

// 其他 API 路由可以继续添加到 router 上
// router.get('/another-route', (req, res) => { /* ... */ });

// 使用 '/api' 前缀将路由器应用到应用程序
app.use('/api', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});