import React from "react";

const Hamburger = ({ isActive, onClick, disabled }) => {
  const classNames = isActive
    ? "dropdown-container active"
    : "dropdown-container";

  console.log(isActive);
  return (
    <div class="hamburger-wrapper" onClick={disabled ? null : onClick}>
      <div class="hamburger-dot"></div>
      <div class="hamburger-dot"></div>
      <div class="hamburger-dot"></div>

      {
        <div className={classNames}>
          <div className="dropdown-item">
            <p>編輯名稱</p>
          </div>
          <hr />
          <div className="dropdown-item">
            <p>刪除分類</p>
          </div>
          <hr />
          <div className="dropdown-item">
            <p>新增Podcast</p>
          </div>
        </div>
      }
    </div>
  );
};

export default Hamburger;
