// const express = require("express");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const app = express();

// // 設置代理路由
// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "https://spotify-backend.alphacamp.io", // 將請求轉發到的目標服務器
//     changeOrigin: true, // 如果目標服務器支持，啟用這個選項可以更改來源為目標服務器
//   })
// );

// // 監聽端口
// const port = 3001; // 或者你想使用的任何其他端口
// app.listen(port, () => {
//   console.log(`Proxy server is running on port ${port}`);
// });

// proxy.js

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// 使用 CORS 中間件
app.use(cors());

// 設置路由，將所有請求轉發到後端服務器
app.all("/api/*", async (req, res) => {
  try {
    // 從請求中提取目標 URL
    const apiUrl = req.url.replace(/^\/api/, "");
    // 發送 API 請求到後端服務器並將回應返回給前端應用程式
    const response = await axios({
      method: req.method,
      url: `https://spotify-backend.alphacamp.io${apiUrl}`,
      headers: req.headers,
      data: req.body,
    });
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error("Error forwarding request:", error);
    res.status(500).send("Internal server error");
  }
});

// 監聽端口
const port = 3001;
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
