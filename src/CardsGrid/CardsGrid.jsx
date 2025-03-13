import PropTypes from "prop-types";
import ArrowBtn from "../assets/casesBlock/green-btn.svg?react";

const CardsGrid = ({ setting }) => {
  return (
    <div className="lg:border lg:border-black lg:rounded-[45px] p-[45px] lg:p-0 lg:shadow-[0px_5px_0px_0px_#191a23]">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 ">
        {setting.map(({ title, desc }, index) => (
          <div
            key={index}
            className={`px-[50px] text-start justify-start border-black lg:border-t border  lg:border-l lg:border-black lg:rounded-none lg:shadow-none lg:hover:shadow-none lg:px-[60px] lg:py-[70px] py-[42px] 
                       flex flex-col rounded-[45px] gap-5 shadow-[0px_5px_0px_0px_#191a23] 
            transition-all duration-600 ease-in-out hover:shadow-[5px_5px_5px_5px_#191a23]
            ${index % 3 === 0 ? "lg:border-l-0" : ""} 
            ${index < 3 ? "lg:border-t-0" : ""} `}
          >
            <h3 className="text-3xl gap-5 font-medium">{title}</h3>
            <p className="text-base gap-5">{desc}</p>
            <a
              href="#"
              className="relative flex items-center gap-[15px] text-xl"
            >
              <ArrowBtn className="w-10 h-10" />
              <span className="text-xl">Learn more</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

CardsGrid.propTypes = {
  setting: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardsGrid;
