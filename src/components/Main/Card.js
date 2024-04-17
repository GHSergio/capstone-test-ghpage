import { usePodcastList } from "../../contexts/PodcastListContext";
import ShowMoreModal from "./Modal/ShowMoreModal";
const Card = ({
  title,
  type,
  imageUrl,
  description,
  videoList,
  onClick,
  active,
}) => {
  const { showMoreModal, handleOpenShowMoreModal, handleCloseShowMoreModal } =
    usePodcastList();

  return (
    <div
      className={`card-container ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="card-wrapper">
        <div className="card-cover">
          <img className="card-cover-img" src={imageUrl} alt="" />
        </div>
        <div className="card-content">
          <h2 className="card-content-title">{title}</h2>
          <p className="card-content-type">{type}</p>
        </div>
        <button className="button-more" onClick={handleOpenShowMoreModal}>
          更多
        </button>
      </div>

      <ShowMoreModal
        isOpen={showMoreModal}
        onClose={handleCloseShowMoreModal}
        imageUrl={imageUrl}
        title={title}
        type={type}
        description={description}
        videoList={videoList}
      />
    </div>
  );
};

export default Card;
