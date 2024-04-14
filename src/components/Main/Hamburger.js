import React from "react";
import { useListContent } from "../../contexts/ListContentContext";

const Hamburger = ({
  isActive,
  onClick,
  disabled,
  listType,

  handleOpenModal,
  activeList,
}) => {
  // const { activeList } = useListContent();

  const classNames = isActive
    ? "dropdown-container active"
    : "dropdown-container";

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
            <p onClick={handleOpenModal}>新增Podcast</p>
          </div>
          <hr />
          {listType !== "favorite" ? (
            <div className="dropdown-item">
              <p>刪除分類</p>
            </div>
          ) : (
            <div className="dropdown-item none">
              <p>無法刪除</p>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Hamburger;
