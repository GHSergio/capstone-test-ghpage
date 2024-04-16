import Counter from "./Counter";

const SideIllustration = ({
  title,
  text,
  activeCounter,
  background,
  handleArrowLeftClick,
  handleArrowRightClick,
}) => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/42da/1823/a1eea6bcd7c4273c62160f93ba61216d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPJytL0YTqXUhMszeJ9ByEid48C3o~v~0uz6BbmRgON~YrN7OsGTB5J0DyrnwI5~~-bSa29YUjapKRze8nyz1Va0jNLJRT5VJ~78kIo5U8mmh7-GbgzOCOKkipXPziQw35XeiPo~~1fHSVZKkgqqSUEfNwc1imxhHJmx-Gcrc5sRBUk-7pAOMMr-7EGthLt~vxKQOofNh6ZVbWVKrd2ab6IcG8wgKEXJgXt6jcn1PlSAVD6OvNa-POEXz3aZ~QPCnpzBGljZV8kRBteTo7RuROibpYTZPZhhiVT63oIArq93jpPVcZmScyu~14GRWy5spGbHnVI8YaAYh8~-OahuwQ__",
    "https://s3-alpha-sig.figma.com/img/7a12/1840/b37291fdf4d627ca1fea05b85bb5897f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XCCDI07tSYtiuhny5cL~Bzx6lZsHeMRBLKOHIlmXIff7hzsKHfsn-ctTxFsrcpU-IVzbhmPHUgNGveNVG-pQC4dTlX2RcdZS~csawA6v9sRWH2fvhYbuQjn4bkZ0a8ieYi4J-UV6ClRZVQHnW38FbS3MvtaN1Ec0tWTzlvKdKqN4bcS5C0ELsd3nt7-CqVpQb8BjfhXBm1PzogdOOQNroh-nhNGresebvwdnLS6AXJNWSZ6xjaKIx0GOyom0M02RS53ztePt7Suy7zA4ADuRf4zuZmqiDMYr4WiGC0FMGnKg1-fPRVL43wkPcCu8dflVr77to2uUZ04PWSzIRJcsHQ__",
    "https://s3-alpha-sig.figma.com/img/52e2/b677/a83b9345284d0f807954cb64eabc0537?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTue4OdKrhfOqtnUsw83LyD3OUYc1v7eKacvkduEFQ0OLsFtbLPM0EpRKNdyIeN6MKEUkZFJ4J~7dxJC5d98ghf-VK2a8b61oxTCMOkmATpjPjvbsN4FF~vR-S3pRkq1r8CWjc7GSlU1kjmObEb~KL4w5RH68Mkvzl12urUo3jcl65N5C0jNb4X-SC8YjXFG0vxWp3LVPhpA4-MSuMOp5-HKLuxaAsQEuEKjLsWjdTkdsg62yuXX25kqZBzu4ZK1HjbjoXViOjthfLPZIoaedMRFqzvo1A-lvwvbNBDR5yUeTyqgh4cUnPA78VJDbWG6DZ00-1g1C6B5ugFRS02ESQ__",
  ];

  return (
    <>
      <div className="SideIllustration" style={{ background: background }}>
        <img src={images[activeCounter - 1]} alt="" className="font" />

        <div className="controller">
          <div className="arrow-left" onClick={handleArrowLeftClick}>
            <svg
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6833 17.65L5.05 10L12.6833 2.35L10.3333 0L0.333336 10L10.3333 20L12.6833 17.65Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="arrow-right" onClick={handleArrowRightClick}>
            <svg
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.31665 17.65L7.94998 10L0.31665 2.35L2.66665 0L12.6667 10L2.66665 20L0.31665 17.65Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="counters">
            <Counter active={activeCounter === 1} />
            <Counter active={activeCounter === 2} />
            <Counter active={activeCounter === 3} />
          </div>
        </div>
        <div className="shadow"></div>
        <div className="content">
          <span className="title">{title}</span>
          <p className="text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default SideIllustration;
