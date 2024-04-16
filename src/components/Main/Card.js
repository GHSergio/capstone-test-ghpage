import { usePodcastList } from "../../contexts/PodcastListContext";
import ShowMoreModal from "./Modal/ShowMoreModal";
const Card = ({ title, type, imageUrl, onClick, active }) => {
  const { showMoreModal, handleOpenShowMoreModal, handleCloseShowMoreModal } =
    usePodcastList();

  console.log("showMoreModal:", showMoreModal);
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
      />
    </div>
  );
};

export default Card;
