import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { authorizeUser } from "../api/Author";

function AuthComponent() {
  const [loading, setLoading] = useState(false);

  // const { navigate } = useNavigate();

  const handleAuthorization = async () => {
    setLoading(true); // 开始加载
    // 模拟授权请求
    await authorizeUser();
    // 授权完成后，跳转到主页面
    setLoading(false); // 结束加载
    navigate("/main"); // 假设使用 react-router-dom 的 navigate 功能
  };

  return (
    <div>
      {loading ? (
        <div className="loader"></div> // 显示加载动画
      ) : (
        <button onClick={handleAuthorization}>Authorize</button>
      )}
    </div>
  );
}

export default AuthComponent;
