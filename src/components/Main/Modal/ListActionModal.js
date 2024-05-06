import { usePodcastList } from "../../../contexts/PodcastListContext";
import { useState } from "react";
// import Picker from "emoji-picker-react";
import EmojiPicker from "emoji-picker-react";

const ListActionModal = ({
  isOpen,
  onClose,
  header,
  text,
  confirmText,
  placeholder,

  index,
  currentAction,
  defaultValue,
}) => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState("📚");

  const {
    editInput,
    setEditInput,
    handleEditInput,

    editListItem,
    deleteListItem,
    addListItem,

    activeList,
    categoryContent,
    setCategoryContent,
  } = usePodcastList();

  const handleConfirmAction = () => {
    switch ((index, currentAction)) {
      case "edit":
        // 執行編輯操作 變更title
        editListItem(index, editInput, chosenEmoji);
        setEditInput("");

        onClose();
        break;
      case "delete":
        // 執行刪除操作
        deleteListItem(index);
        onClose();
        break;

      case "add":
        // 執行添加操作
        addListItem(editInput, chosenEmoji);
        setEditInput("");

        onClose();
        break;

      default:
        console.error("Invalid action");
    }
  };

  const handlePickerOpen = () => {
    setPickerOpen(true);
  };

  //選取emoji 更新categoryContent.emoji
  const onEmojiClick = (event, emojiObject) => {
    const newEmoji = event.emoji;
    setChosenEmoji(newEmoji);

    // // 更新到context中
    // const updatedCategoryContent = [...categoryContent];
    // updatedCategoryContent[activeList].emoji = newEmoji;
    // // 更新context中的值;
    // setCategoryContent(updatedCategoryContent);
    setPickerOpen(false);
  };

  const emoji = categoryContent[activeList]?.emoji;
  const title = categoryContent[activeList]?.title;
  console.log("categoryContent:", emoji, title);

  console.log("editInput:", editInput);
  console.log("defaultValue:", defaultValue);
  console.log("chosenEmoji:", chosenEmoji);
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
                <p className="modal-header-text">{header}</p>
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
                {/* 刪除分類不用input */}
                {header !== "刪除分類" && (
                  <div className="list-modal-search-container">
                    {/* 拆分成emoji & title */}
                    <div className="emoji-container" onClick={handlePickerOpen}>
                      <span className="emoji">
                        {header === "編輯名稱"
                          ? chosenEmoji || (defaultValue && defaultValue.emoji)
                          : chosenEmoji || "📚"}
                      </span>
                    </div>
                    <input
                      className="search-input"
                      type="text"
                      placeholder={placeholder && placeholder}
                      value={editInput || (defaultValue && defaultValue.title)}
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
                {/* 有input的actionModal input不能空白 */}
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
      {/* emoji選擇器 */}
      {pickerOpen && (
        <div
          className="emoji-picker-container"
          style={{
            zIndex: "50",
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </>
  );
};

export default ListActionModal;
