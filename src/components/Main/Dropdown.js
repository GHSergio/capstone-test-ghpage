import React, { useState } from "react";

const Dropdown = ({ activeDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown-container ${activeDropdown ? "active" : ""}`}>
      <div className="dropdown-item">
        <p>編輯名稱</p>
        <hr />
      </div>
      <div className="dropdown-item">
        <p>刪除分類</p>
        <hr />
      </div>
      <div className="dropdown-item">
        <p>新增Podcast</p>
        <hr />
      </div>
    </div>
  );
};

export default Dropdown;
