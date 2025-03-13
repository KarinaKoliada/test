import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { heroSettings } from "./heroSettings";

const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Navigation, FreeMode, Autoplay]}
        slidesPerView={2}
        breakpoints={{
          500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
        loop={true}
        loopedSlides={heroSettings.length}
        freeMode={true}
        autoplay={{
          delay: 0,
        }}
        speed={3000}
        navigation={true}
        className="pb-4"
      >
        {heroSettings.map(({ img, alt }) => (
          <SwiperSlide key={alt} className="w-auto flex  gap-6">
            <img
              src={img}
              alt={alt}
              className="h-auto cursor-pointer transition-opacity duration-[600ms] ease-in-out hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
