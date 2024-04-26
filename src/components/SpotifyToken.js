// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { getAccessToken } from "../api/Auth";

// const SpotifyToken = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const authCode = queryParams.get("code");

//   useEffect(() => {
//     if (authCode) {
//       console.log(`授權碼: ${authCode}`);
//       // 使用提取到的授權碼來獲取訪問令牌
//       getAccessToken(authCode);
//     }
//   }, [authCode]);

//   return (
//     <div>{authCode ? `授權碼已提取: ${authCode}` : "正在處理授權碼..."}</div>
//   );
// };

// export default SpotifyToken;
