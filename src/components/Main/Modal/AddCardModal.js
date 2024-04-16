import React, { useState } from "react";
import Card from "../Card";
import { usePodcastList } from "../../../contexts/PodcastListContext";
// import { useListContent } from "../../../contexts/ListContentContext";

const AddCardModal = ({ isOpen, onConfirm, onClose }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isAnyCardClicked, setIsAnyCardClicked] = useState(false);

  const { podcastList, selectedPodcasts, setSelectedPodcasts } =
    usePodcastList();

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  //篩選List內 title 包含 searchInput 的 item
  const filteredPodcasts = podcastList.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handlePodcastClick = (podcast) => {
    // 重複:傳入的id 已存在selectedPodcasts
    const isSelected = selectedPodcasts.some((item) => item.id === podcast.id);
    let updatedPodcasts = [...selectedPodcasts];
    //重複則 篩選出 除了傳入的podcast以外的項目
    if (isSelected) {
      updatedPodcasts = selectedPodcasts.filter(
        (item) => item.id !== podcast.id
      );
    } else {
      // 沒重複則 該項目更新isSelected
      updatedPodcasts = [...selectedPodcasts, { ...podcast, active: true }];
    }
    setSelectedPodcasts(updatedPodcasts);
    setIsAnyCardClicked(!isSelected || updatedPodcasts.length > 0);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-wrapper">
              <div className="modal-header">
                <p className="modal-header-text">新增 Podcast</p>
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
              <div className="modal-main">
                <div className="modal-search-container">
                  <svg
                    className="search-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_37_3552)">
                      <path
                        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                        fill="#ACADB9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_37_3552">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    className="search-input"
                    type="text"
                    placeholder="開始搜尋..."
                    value={searchInput}
                    onChange={handleSearch}
                  />
                </div>
                <div className="search-result">
                  <p className="search-result-header">搜尋結果</p>
                  <div className="card-list-container">
                    {filteredPodcasts.map((podcast) => (
                      <Card
                        key={podcast.id}
                        title={podcast.title}
                        type={podcast.type}
                        imageUrl={podcast.imageUrl}
                        onClick={() => handlePodcastClick(podcast)}
                        active={selectedPodcasts.some(
                          (item) => item.id === podcast.id
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="modal-button-close" onClick={onClose}>
                  <p>取消</p>
                </button>
                <button
                  className={
                    !isAnyCardClicked
                      ? "modal-button-add"
                      : "modal-button-add usable"
                  }
                  disabled={!isAnyCardClicked}
                  onClick={() => onConfirm(selectedPodcasts)}
                >
                  <p>確認新增</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCardModal;
