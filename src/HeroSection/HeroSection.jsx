import PropTypes from "prop-types";
import clsx from "clsx";


const HeroSection = ({ title, img, desc, subTitle }) => {
  return (
    <div
    className={clsx(
      "rounded-[45px] lg:p-[88px_100px_64px_85px] lg:bg-[#F3F3F3] grid w-fit",
      subTitle
        ? "grid-success-areas-mobile lg:grid-success-areas-desktop"
        : "grid-no-subtitle-mobile lg:grid-no-subtitle-desktop",
    )}
    
    >
      {subTitle && (
        <p className="text-[#696969] text-lg mt-10 lg:mt-0 rounded-[9px] bg-[#E8E8E8] px-4 py-1 area-subtitle w-fit">
          {subTitle}
        </p>
      )}
      <h1 className="text-[43px] leading-tight md:text-6xl area-title">
        {title}
      </h1>

      <div className="my-9 md:my-6 lg:my-0 area-image">
        <img src={img} alt="illustration" />
      </div>
      <p className="text-base md:text-xl area-description">{desc}</p>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default HeroSection;
