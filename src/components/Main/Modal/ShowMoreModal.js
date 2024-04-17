import "../../../styles/showMoreModal.scss";
import { useListContent } from "../../../contexts/ListContentContext";

const ShowMoreModal = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  type,
  description,
  videoList,
}) => {
  const { addFavoriteItem } = useListContent();
  // console.log(videoList);
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div
            className="more-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="more-modal-wrapper">
              <div className="more-modal-header">
                <div className="more-modal-header-img">
                  <img src={imageUrl} alt="" />
                </div>
                <div className="more-modal-header-content">
                  <span className="content-title">{title}</span>
                  <span className="content-type">{type}</span>
                  <span className="content-text">{description}</span>
                </div>

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
                <button className="button-delete">
                  <p>刪除</p>
                </button>
              </div>

              {videoList.map((item, index) => {
                return (
                  <>
                    <div className="video-container" key={index}>
                      <div className="video-wrapper">
                        <div className="video-image">
                          <img src={item.imageUrl} alt="" />
                        </div>
                        <div className="video-content">
                          <span className="title">{item.title}</span>
                          <span className="description">
                            {item.description}
                          </span>
                          <div className="switch-wrapper">
                            <div className="player">
                              <svg
                                width="34"
                                height="34"
                                viewBox="0 0 34 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17 0.333374C7.80004 0.333374 0.333374 7.80004 0.333374 17C0.333374 26.2 7.80004 33.6667 17 33.6667C26.2 33.6667 33.6667 26.2 33.6667 17C33.6667 7.80004 26.2 0.333374 17 0.333374ZM13.6667 24.5V9.50004L23.6667 17L13.6667 24.5Z"
                                  fill="#FF7F50"
                                />
                              </svg>
                            </div>
                            <p className="date">
                              {item.date} - {item.duration}
                            </p>
                          </div>
                          <div
                            className="bookmark"
                            onClick={() => addFavoriteItem(item)}
                          >
                            <svg
                              width="12"
                              height="16"
                              viewBox="0 0 12 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.1666 0.5H1.83329C0.916626 0.5 0.166626 1.25 0.166626 2.16667V15.5L5.99996 13L11.8333 15.5V2.16667C11.8333 1.25 11.0833 0.5 10.1666 0.5ZM10.1666 13L5.99996 11.1833L1.83329 13V2.16667H10.1666V13Z"
                                fill="#FF7F50"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowMoreModal;
