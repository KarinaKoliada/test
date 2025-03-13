import PropTypes from "prop-types";

const CoveredTitle = ({ className, setting, title1, title2 }) => {
  return (
    <div className={`${className} flex flex-col whitespace-nowrap`}>
      <h3 className={`flex flex-col ${className} `}>
        {[title1, title2].map((title, index) => (
          <span
            key={index}
            style={{ backgroundColor: setting.titleBackgroundColor }}
            className="inline-flex w-fit px-[7px] gap-[10px] rounded-[7px]"
          >
            {title}
          </span>
        ))}
      </h3>
    </div>
  );
};

CoveredTitle.propTypes = {
  className: PropTypes.string,
  setting: PropTypes.shape({
    titleBackgroundColor: PropTypes.string.isRequired,
  }).isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};

export default CoveredTitle;

