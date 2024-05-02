import "../../styles/content.scss";
import Card from "./Card";
import AddCardModal from "./Modal/AddCardModal";
import ListItem from "./ListItem";
import { usePodcastList } from "../../contexts/PodcastListContext";

const CardList = ({
  showModal,
  handleOpenModal,
  handleCloseModal,
  handleConfirmModal,
}) => {
  const {
    activeList,
    categoryContent,
    favoriteList,
    activeEpisode,
    handleClickListItem,
    handleClickPlayer,
  } = usePodcastList();

  const activeCategoryContent =
    categoryContent[activeList] && categoryContent[activeList].channelList;
  //分類清單
  const getCategoryContent = () => {
    //當List沒有內容
    if (!activeCategoryContent || activeCategoryContent.length === 0) {
      return (
        <>
          <div className="default">
            <img
              src="https://s3-alpha-sig.figma.com/img/ffc9/7d3e/dc49d88c06298a4fee08f03125d1b0b0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6FlrVOU48~GWCRifV8fGuwCwwoG-YHOvz7NC8gGig4YsGQ48mDkr37S7iYtHfeo7BJsrIwbkq5F8ts~cdKIgGQ31WZuFKwREa~o1bFThq1z2uOiFfH5skwZAGRtk5ffSZ~d107W5cBvI2SJtZpX30I5y1K4Uqb5xX-tFa3c42gRv8x2syMJYQEXAPfCV~h7Ke9Vj4qyj--0UM7IxxaocnX7jAs6Tyb7Ysv-TP~VnN3YNz1~VCpqwaX6n4FPYBo5D0P3baECwUPc0uTulm~r8YaURPBU4MFeHHDlcRJN277rsuH0hVGDAZt-du7CICPvpcYSQt63qvw2gFOhSQnSgA__"
              alt=""
            />
            <span>您尚未加入任何 Podcast，可以點擊按鈕新增！</span>
            <button className="button-add" onClick={handleOpenModal}>
              <p>新增 Podcast</p>
            </button>

            <AddCardModal
              isOpen={showModal}
              onConfirm={handleConfirmModal}
              onClose={handleCloseModal}
            />
          </div>
        </>
      );
    } else {
      //當List有內容
      return (
        <>
          <div className="card-list-container">
            {activeCategoryContent &&
              activeCategoryContent.map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  title={item.title}
                  publisher={item.publisher}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  episodes={item.episodes}
                />
              ))}

            <AddCardModal
              isOpen={showModal}
              onConfirm={handleConfirmModal}
              onClose={handleCloseModal}
            />
          </div>
        </>
      );
    }
  };
  //我的最愛
  const getFavoriteContent = () => {
    if (!favoriteList.episodes || favoriteList.episodes.length === 0) {
      return (
        <>
          <div className="default">
            <img
              src="https://s3-alpha-sig.figma.com/img/ffc9/7d3e/dc49d88c06298a4fee08f03125d1b0b0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6FlrVOU48~GWCRifV8fGuwCwwoG-YHOvz7NC8gGig4YsGQ48mDkr37S7iYtHfeo7BJsrIwbkq5F8ts~cdKIgGQ31WZuFKwREa~o1bFThq1z2uOiFfH5skwZAGRtk5ffSZ~d107W5cBvI2SJtZpX30I5y1K4Uqb5xX-tFa3c42gRv8x2syMJYQEXAPfCV~h7Ke9Vj4qyj--0UM7IxxaocnX7jAs6Tyb7Ysv-TP~VnN3YNz1~VCpqwaX6n4FPYBo5D0P3baECwUPc0uTulm~r8YaURPBU4MFeHHDlcRJN277rsuH0hVGDAZt-du7CICPvpcYSQt63qvw2gFOhSQnSgA__"
              alt=""
            />
            <span>您尚未收藏任何 Podcast</span>
          </div>
        </>
      );
    } else {
      //當List有內容
      return (
        <>
          <div className="favorite-list-container">
            {favoriteList.episodes &&
              favoriteList.episodes.map((item) => (
                <ListItem
                  item={item}
                  activeEpisode={activeEpisode === item.id}
                  handleClickListItem={() => handleClickListItem(item.id)}
                  handleClickPlayer={() => handleClickPlayer(activeEpisode)}
                />
              ))}

            {/* {showModal && (
              <AddCardModal
                isOpen={showModal}
                onConfirm={handleConfirmModal}
                onClose={handleCloseModal}
              />
            )} */}
          </div>
        </>
      );
    }
  };

  //Greeting
  const now = new Date();
  const getGreeting = () => {
    const hours = now.getHours();

    if (hours >= 5 && hours <= 12) {
      return "早安";
    } else if (hours >= 12 && hours <= 17) {
      return "午安";
    } else if (hours >= 17 || hours <= 5) {
      return "晚安";
    }
  };
  const greeting = getGreeting();

  return (
    <>
      <div className="content-container">
        <h1>{greeting}</h1>
        {activeList === 99 ? getFavoriteContent() : getCategoryContent()}
      </div>
    </>
  );
};

export default CardList;
