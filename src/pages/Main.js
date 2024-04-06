import React from "react";
import { Outlet, Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/main/commuteList">通勤清單</Link>
          </li>
          <li>
            <Link to="/main/learnList">學習清單</Link>
          </li>
          <li>
            <Link to="/main/preSleepList">睡前清單</Link>
          </li>
          <li>
            <Link to="/main/myPodcastList">我的Podcast</Link>
          </li>
          <li>
            <Link to="/main/myFavoriteList">已收藏</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
