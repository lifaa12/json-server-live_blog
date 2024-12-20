const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // 使用您的 db.json 文件
const middlewares = jsonServer.defaults();

// 使用 json-server-auth 中間件
server.db = router.db; // 將資料庫連接到 auth
server.use(middlewares);
server.use(auth);
server.use(router);

// Render 要求應用程序監聽 PORT 環境變數
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server with Auth is running on port ${PORT}`);
});
