const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// 設置代理路由
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://spotify-backend.alphacamp.io", // 將請求轉發到的目標服務器
    changeOrigin: true, // 如果目標服務器支持，啟用這個選項可以更改來源為目標服務器
  })
);

// 監聽端口
const port = 3001; // 或者你想使用的任何其他端口
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
