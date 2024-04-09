import React from "react";
import "../../styles/card.scss";

const Card = ({ activeList }) => {
  // 根據所在的分頁 決定顯示的內容
  const getContent = () => {
    if (activeList === "myFavoriteList") {
      return (
        <>
          <h1>早安</h1>
          <div className="default">
            <img
              src="https://s3-alpha-sig.figma.com/img/ffc9/7d3e/dc49d88c06298a4fee08f03125d1b0b0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6FlrVOU48~GWCRifV8fGuwCwwoG-YHOvz7NC8gGig4YsGQ48mDkr37S7iYtHfeo7BJsrIwbkq5F8ts~cdKIgGQ31WZuFKwREa~o1bFThq1z2uOiFfH5skwZAGRtk5ffSZ~d107W5cBvI2SJtZpX30I5y1K4Uqb5xX-tFa3c42gRv8x2syMJYQEXAPfCV~h7Ke9Vj4qyj--0UM7IxxaocnX7jAs6Tyb7Ysv-TP~VnN3YNz1~VCpqwaX6n4FPYBo5D0P3baECwUPc0uTulm~r8YaURPBU4MFeHHDlcRJN277rsuH0hVGDAZt-du7CICPvpcYSQt63qvw2gFOhSQnSgA__"
              alt=""
            />
            <span>您尚未收藏任何 Podcast</span>
            {/* <button className="button-add">
              <p>新增 Podcast</p>
            </button> */}
          </div>
        </>
      );
    } else {
      return (
        <>
          <h1>早安</h1>
          <div className="default">
            <img
              src="https://s3-alpha-sig.figma.com/img/ffc9/7d3e/dc49d88c06298a4fee08f03125d1b0b0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6FlrVOU48~GWCRifV8fGuwCwwoG-YHOvz7NC8gGig4YsGQ48mDkr37S7iYtHfeo7BJsrIwbkq5F8ts~cdKIgGQ31WZuFKwREa~o1bFThq1z2uOiFfH5skwZAGRtk5ffSZ~d107W5cBvI2SJtZpX30I5y1K4Uqb5xX-tFa3c42gRv8x2syMJYQEXAPfCV~h7Ke9Vj4qyj--0UM7IxxaocnX7jAs6Tyb7Ysv-TP~VnN3YNz1~VCpqwaX6n4FPYBo5D0P3baECwUPc0uTulm~r8YaURPBU4MFeHHDlcRJN277rsuH0hVGDAZt-du7CICPvpcYSQt63qvw2gFOhSQnSgA__"
              alt=""
            />
            <span>您尚未加入任何 Podcast，可以點擊按鈕新增！</span>
            <button className="button-add">
              <p>新增 Podcast</p>
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="card-container">{getContent()}</div>;
    </>
  );
};

export default Card;
