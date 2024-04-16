import React from "react";
import { useListContent } from "../../contexts/ListContentContext";
import ListActionModal from "./Modal/ListActionModal";

const Hamburger = ({
  isActive,
  onClick,
  disabled,
  listType,

  handleOpenModal,
}) => {
  const {
    listActionModal,
    handleCloseListActionModal,

    listContent,
    activeList,

    currentAction,
    handleActionClick,
  } = useListContent();

  const classNames = isActive
    ? "dropdown-container active"
    : "dropdown-container";

  const renderActionModal = () => {
    switch (currentAction) {
      case "edit":
        return (
          <ListActionModal
            isOpen={listActionModal}
            title="編輯名稱"
            placeholder={`${listContent[activeList].emoji} ${listContent[activeList].title}`}
            confirmText="儲存"
            onClose={handleCloseListActionModal}
            index={activeList}
            currentAction={currentAction}
          />
        );

      case "add":
        return (
          <ListActionModal
            isOpen={listActionModal}
            title="新增分類"
            placeholder="請輸入分類名稱"
            confirmText="儲存"
            onClose={handleCloseListActionModal}
            index={activeList}
            currentAction={currentAction}
          />
        );

      case "delete":
        return (
          <ListActionModal
            isOpen={listActionModal}
            title="刪除分類"
            text={`您確定要繼續刪除  [${listContent[activeList].emoji}  ${listContent[activeList].title}]  分類嗎？`}
            confirmText="刪除"
            onClose={handleCloseListActionModal}
            index={activeList}
            currentAction={currentAction}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="hamburger-wrapper" onClick={disabled ? null : onClick}>
      <div className="hamburger-dot"></div>
      <div className="hamburger-dot"></div>
      <div className="hamburger-dot"></div>

      {
        <div className={classNames}>
          <div className="dropdown-item">
            <p onClick={() => handleActionClick("edit")}>編輯名稱</p>
          </div>

          <hr />

          <div className="dropdown-item">
            <p onClick={handleOpenModal}>新增Podcast</p>
          </div>
          <hr />

          {listType !== "favorite" ? (
            <>
              <div className="dropdown-item">
                <p onClick={() => handleActionClick("delete")}>刪除分類</p>
              </div>
            </>
          ) : (
            <div className="dropdown-item none">
              <p>無法刪除</p>
            </div>
          )}
        </div>
      }
      {renderActionModal()}
    </div>
  );
};

export default Hamburger;
