import React from "react";
import LoginWrapper from "../components/LoginWrapper.js";
import SideIllustration from "../components/SideIllustration.js";
import "../styles/loginContainer.scss";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="left-container">
          <LoginWrapper />
        </div>
        <div className="right-container">
          <SideIllustration
            title="鼓舞人心的故事"
            text="從非凡的人生故事和成功經歷中獲得靈感"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
