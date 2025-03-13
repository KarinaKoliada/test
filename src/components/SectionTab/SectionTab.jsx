import PropTypes from "prop-types";

const SectionTab = ({ title, desc, className, parts, id }) => {
  const markupTitle = (() => {
    if (parts) {
      return (
        <h2>
          {parts.map((part) => (
            <span
              className="bg-[#b9ff66] inline-block text-4xl md:text-[40px] md:leading-10 mb-7 md:mb-0 border border-[#b9ff66] px-2 rounded-[7px]"
              key={part}
            >
              {part}
            </span>
          ))}
        </h2>
      );
    }

    return (
      <h2 className="bg-[#b9ff66] inline-block text-4xl leading-9 md:text-[40px] md:leading-10 mb-7 md:mb-0 border border-[#b9ff66] px-2 rounded-[7px]">
        {title}
      </h2>
    );
  })();

  return (
    <div
      id={id}
      className={`flex items-center text-center flex-col md:flex-row  md:gap-10 ${className}`}
    >
      {markupTitle}
      <p className="  text-base md:w-[580px] md:text-lg text-center md:text-left leading-6">
        {desc}
      </p>
    </div>
  );
};

SectionTab.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  parts: PropTypes.arrayOf(PropTypes.string), 
  className: PropTypes.string,
  id: PropTypes.string,
};
SectionTab.defaultProps = {
  className: "",
};

export default SectionTab;
