import React from "react";
import Hamburger from "./Hamburger";

const ListItem = ({
  emoji,
  title,
  listType,
  isActive,
  onClick,
  dropdownActive,
  handleDropdownClick,

  handleOpenModal,
}) => {
  return (
    <li
      className={isActive ? "list-item active" : "list-item"}
      onClick={onClick}
    >
      <div className="list-item-content">
        <span className="emoji">{emoji}</span>
        <p className="list-item-title">{title && title}</p>
      </div>
      <div className="hamburger-container">
        <Hamburger
          isActive={dropdownActive}
          onClick={handleDropdownClick}
          listType={listType}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </li>
  );
};

export default ListItem;
