import React from "react";
import { useListContent } from "../../../contexts/ListContentContext";

const ListActionModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  text,
  confirmText,
  placeholder,

  index,
  currentAction,
}) => {
  const {
    editInput,
    setEditInput,
    handleEditInput,

    editListItem,
    deleteListItem,
    addListItem,
  } = useListContent();

  const handleConfirmAction = () => {
    switch (currentAction) {
      case "edit":
        // 執行編輯操作
        editListItem(index, editInput);

        onClose();
        break;
      case "delete":
        // 執行刪除操作
        deleteListItem(index);
        onClose();
        break;

      case "add":
        // 執行添加操作
        addListItem(editInput);
        setEditInput("");

        onClose();
        break;

      default:
        console.error("Invalid action");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div
            className="list-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-wrapper">
              <div className="modal-header">
                <p className="modal-header-text">{title}</p>
                <svg
                  className="button-close"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onClose}
                >
                  <g clipPath="url(#clip0_37_3297)">
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="#93989A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_3297">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <hr />
              <div className="list-modal-main">
                {title !== "刪除分類" && (
                  <div className="list-modal-search-container">
                    <input
                      className="search-input"
                      type="text"
                      placeholder={placeholder}
                      value={editInput}
                      onChange={handleEditInput}
                    />
                  </div>
                )}
                <div className="search-result">
                  {text && <p className="search-result-header">{text}</p>}
                  <div className="card-list-container"></div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="modal-button-close" onClick={onClose}>
                  <p>取消</p>
                </button>

                {currentAction !== "delete" ? (
                  <button
                    className={
                      editInput.length !== 0
                        ? "modal-button-add usable"
                        : "modal-button-add"
                    }
                    disabled={editInput.length === 0}
                    onClick={handleConfirmAction}
                  >
                    <p>{confirmText}</p>
                  </button>
                ) : (
                  <button
                    className="modal-button-add usable"
                    onClick={handleConfirmAction}
                  >
                    <p>{confirmText}</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListActionModal;
