import PropTypes from "prop-types";
import GreenArrow from "../assets/arrowsBtn/green-arrow.svg?react";

const UseCases = ({ setting, className }) => {
  return (
    <div className="hidden lg:block justify-center">
      <div className="flex py-[70px] px-[60px] items-center gap-16 mb-[140px] rounded-[45px] bg-[#191a23]">
        {setting.map(({ text, line, title }, index) => (
          <div
            className="w-full xl:gap-16 lg:gap-12 md:gap-9 flex items-center "
            key={index}
          >
            <div className="flex flex-col items-start gap-5">
              {title && (
                <h3 className="text-3xl text-white flex justify-center text-left">
                  {title}
                </h3>
              )}
              <p className=" text-lg text-[#fff]">{text}</p>
              <a
                className="text-xl text-[#b9ff66] flex gap-4 items-center"
                href="#"
              >
                Learn more
                <GreenArrow />
              </a>
            </div>
            {line && <p className={`w-[1px] ${className} bg-[#fff]`}>{line}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
UseCases.propTypes = {
  setting: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      line: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

UseCases.defaultProps = {
  className: "",
};
export default UseCases;
