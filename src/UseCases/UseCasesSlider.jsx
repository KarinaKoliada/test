import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import ArrowBtn from "../assets/arrowsBtn/green-arrow.svg?react";

const UseCasesSlider = ({ setting, className }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, FreeMode, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        loopedSlides={setting.length}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        speed={3000}
        navigation={true}
        className="pb-4"
      >
        {setting.map(({ text, title }, index) => (
          <SwiperSlide key={index} className="w-full flex gap-6">
            <div
              className={`flex py-[42px] ${className} lg:h-auto px-[50px] lg:py-[70px] lg:px-[60px] items-center gap-16 mb-[60px] lg:mb-[140px] rounded-[45px] bg-[#191a23]`}
            >
              <div className="gap-16 flex items-center" key={index}>
                <div className="flex flex-col items-start gap-5">
                  {title && (
                    <h3 className="text-3xl text-white flex justify-center text-left">
                      {title}
                    </h3>
                  )}
                  <p className="w-full text-base text-[#fff]">{text}</p>
                  <a className="text-[#b9ff66] flex gap-4 items-center" href="#">
                    Learn more
                    <ArrowBtn />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

UseCasesSlider.propTypes = {
  setting: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

UseCasesSlider.defaultProps = {
  className: "",
};

export default UseCasesSlider;
