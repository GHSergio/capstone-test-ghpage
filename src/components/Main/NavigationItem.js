import Hamburger from "./Hamburger";
import { usePodcastList } from "../../contexts/PodcastListContext";
const NavigationItem = ({
  index,
  emoji,
  title,
  activeDropdown,
  handleClickList,

  handleDropdownClick,
  handleOpenModal,
}) => {
  const { activeList } = usePodcastList();

  return (
    <li
      className={activeList === index ? "list-item active" : "list-item"}
      key={index}
      onClick={() => handleClickList(index)}
    >
      <div className="list-item-content">
        <span className="emoji">{emoji && emoji}</span>
        <p className="list-item-title">{title && title}</p>
      </div>
      <div className="hamburger-container">
        <Hamburger
          isActive={activeDropdown}
          onClick={handleDropdownClick}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </li>
  );
};

export default NavigationItem;
