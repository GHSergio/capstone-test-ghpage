import { useState, useCallback } from "react";
import LoginWrapper from "../components/LoginPage/LoginWrapper.js";
import SideIllustration from "../components/LoginPage/SideIllustration.js";
import "../styles/loginContainer.scss";

const Login = () => {
  const [activeCounter, setActiveCounter] = useState(1);
  const loginData = [
    {
      id: 1,
      title: "鼓舞人心的故事",
      text: "從非凡的人生故事和成功經歷中獲得靈感",
      background: "#23262f",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/42da/1823/a1eea6bcd7c4273c62160f93ba61216d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QoyF4DId56ZSmYf~tcWQVAe4w5p6AifHM3VjQoEF7x3XezoT~bq~mWnzI9CQhUiLgyFL7UucFNOWIL4JD1koXf9yNd74Lya87bjEXtKiQvwFLhOmKsR3RI-G6BY-R7KdNJwxNCQxfAZWyh1uEM5fK4-uOzedYtkItNFaOjXuQK7jKLLA9GU31lkGEagRYr3ZnYAKx09D3iHB8-BQplGLk-Z6Ml9RPxomC6yZ6L7KNajvAcFqwROTUMPU3pcC3aaRQRdV0dDcx19D~wfQVtd2AMWQd8eT-yYwk9L0ERdo9eKmNhwTfSymVgOwd3NA7B1IBuuTniiamcTMTEiJYOxwXQ__",
    },
    {
      id: 2,
      title: "輕鬆分類與管理",
      text: "一目了然的分類，讓收藏的 Podcast 保持整潔",
      background: "#2d3831",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/7a12/1840/b37291fdf4d627ca1fea05b85bb5897f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U4WBent4xhyM2EuaJu4Cf4SYSYXiTuI3AnNnKaSqjnfmYLunfXVQPoSbX0GaqgDRn55GiDC0wZNLTOye~qX3aXhtzQkvxglFqvTLoHpyNQg2PP~ct77qlMEzowcw7S-ShCQAzcD5gN6kwWA9Tg2GeHN1hngweFEpJY6e52ljFPmbcj8Raq~AaMA7giHPUI3xkFVjGzY44QwoI0fE72X7M3JuC4lUhwFDMla0Tdv9SKuR3vCp6q3ANw9mex2-BHSIChUuSsxWGvsFO5zn~I5iLDPpjzpvAv0umQ8SGh9U~ksxx3nykCwYEw15NOLlF1DUmXkSP8LGfrASvKJ95hjuxg__",
    },
    {
      id: 3,
      title: "Spotify 快速同步",
      text: "透過 Spotify 登入，即刻同步您的收藏，隨時隨地收聽",
      background: "#063540",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/52e2/b677/a83b9345284d0f807954cb64eabc0537?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FuuE6D-VLYkT4tbpVnXKJgc0JF0H8zOZhJZ8sHPoFhBL-iVW4TQ4pwHn9DsBTwSz9kxVtq6QdXmT28vZ1wVgrgLTnX-xyljkI4xBdeuRKhcPQ8nzsgCKc7i8jPIYuRv7nHm0YJCzRQvV8tgPxXJ1RWnI1ZwGnZYa0fmlo5ZAYD6MRqeI6MxcdSt7shJz0jskW~4HWgm83z2bfiQK0Moj58rKyZDO8-HsSSh7dEFfpYF0GpjFcWEkSuLLzm95fur-pxVp7cwrD4IwdKSBRAM9CaRjYSyL500JOO2DUfOpxigTeR4sngCJOf3KxYSh1TUlKeNiwYk99sICXAFj7BKnvQ__",
    },
  ];
  const handleArrowLeftClick = useCallback(() => {
    setActiveCounter((prevCounter) =>
      prevCounter === 1 ? loginData.length : prevCounter - 1
    );
  }, [loginData.length]);

  const handleArrowRightClick = useCallback(() => {
    setActiveCounter((prevCounter) =>
      prevCounter === loginData.length ? 1 : prevCounter + 1
    );
  }, [loginData.length]);

  return (
    <>
      <div className="login-container">
        <div className="left-container">
          <LoginWrapper />
        </div>
        <div className="right-container">
          <SideIllustration
            activeCounter={activeCounter}
            title={loginData[activeCounter - 1].title}
            text={loginData[activeCounter - 1].text}
            background={loginData[activeCounter - 1].background}
            imgSrc={loginData[activeCounter - 1].imgSrc}
            handleArrowLeftClick={handleArrowLeftClick}
            handleArrowRightClick={handleArrowRightClick}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
