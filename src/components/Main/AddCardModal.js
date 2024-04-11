import React, { useState } from "react";
import Card from "./Card";
import { usePodcastList } from "../../contexts/PodcastListContext";

const AddCardModal = ({ isOpen, onConfirm, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    podcastList,
    selectedPodcast,
    setSelectedPodcast,
    handlePodcastClick,
  } = usePodcastList();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPodcasts = podcastList.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(podcastList);

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
                  <g clip-path="url(#clip0_37_3297)">
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
                    <g clip-path="url(#clip0_37_3552)">
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
                    value={searchTerm}
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
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="modal-button-close" onClick={onClose}>
                  <p>取消</p>
                </button>
                <button className="modal-button-add" onClick={onConfirm}>
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
