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

  newTitle,
}) => {
  const {
    manageListItem,
    // listContent,
    // currentAction,

    editInput,
    setEditInput,
    handleEditInput,

    newItemInput,
    setNewItemInput,
    handleNewItemInput,
  } = useListContent();

  const handleConfirmAction = () => {
    switch (currentAction) {
      case "edit":
        // 執行編輯操作
        manageListItem("edit", index, newTitle);
        console.log("newTitle:", [newTitle], " editInput:", [editInput]);

        onClose();
        break;
      case "delete":
        // 執行刪除操作
        manageListItem("delete", index);
        onClose();
        break;

      case "add":
        // 執行添加操作
        manageListItem("add", newTitle);
        setNewItemInput("");
        console.log("newTitle:", [newTitle], "newItemInput", [newItemInput]);

        onClose();
        break;

      default:
        console.error("Invalid action");
    }
  };
  // console.log(activeAction, isOpen, title, text, confirmText);
  // console.log(listContent[index].title, searchInput);
  // console.log(currentAction);
  // console.log(index);
  // console.log(listContent[index], searchInput);
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
                      value={newTitle}
                      onChange={
                        currentAction === "edit"
                          ? handleEditInput
                          : handleNewItemInput
                      }
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
                      currentAction === "edit"
                        ? editInput.length !== 0
                          ? "modal-button-add usable"
                          : "modal-button-add"
                        : newItemInput.length !== 0
                        ? "modal-button-add usable"
                        : "modal-button-add"
                    }
                    disabled={
                      (currentAction === "edit" && editInput.length === 0) ||
                      (currentAction === "add" && newItemInput.length === 0)
                    }
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
                {/* {currentAction !== "delete" ? (
                  <button
                    className={
                      searchInput.length !== 0
                        ? "modal-button-add usable"
                        : "modal-button-add"
                    }
                    disabled={searchInput.length === 0}
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
                )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListActionModal;
