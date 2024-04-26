import "../../styles/footer.scss";
import { useUser } from "../../contexts/UserContext";

const User = () => {
  const { userData } = useUser();
  console.log(userData.display_name);
  return (
    <>
      <div className="user-container">
        <div className="user-wrapper">
          <img
            className="user-avatar"
            src="https://s3-alpha-sig.figma.com/img/be47/616a/4ce30b5d2f2773c5785f9dc061ceff73?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fiRG4okOqNtAU1D-WJtUTtAG7a5eU0tHuAgdwNPXw1-1sQ-cAoZM5-gSrUdxQAyi5Mwg6N0ANFQ2nlqVjAXGD2b3GJx171IXvSrO7~TYc-dd4jVMDt11~69j0GmYV70dto~vSGwiMbAPiqguQZsk1suGAF2mI~QarAPCYZKHRmG2F-F51VHjqyCMVJ~bgaF3JMoZq0Z2TIj2-s14bCNqoV1Oykl2LENM7L5Ij90VByHR7lIt-g60H1AUh-XxgtLQSBRLJ4iaZ4BaqlLkyfp~eDh7k3ZK9I5zBRYfAXymWo1jPuYKr4reOQEj2QSY9lZaKJoSKjV5ZJOmBvxs-~K8-g__"
            alt="user"
          />
          <span className="user-name">{userData.display_name}</span>
        </div>
        <div className="chevron-down">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#718096"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default User;
