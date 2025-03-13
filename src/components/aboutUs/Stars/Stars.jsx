import StarsMob from "../../../assets/aboutUs/stars-mob.svg?react";
import StarsDesc from "../../../assets/aboutUs/stars.svg?react";
//flex-col-reverse
const Stars = () => {
  return (
    <section id="stars" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-5 px-[35px] pt-[50px] pb-8 justify-center items-center border rounded-[45px] bg-[#191A23]">
          <div className="flex justify-center md:justify-end">
            <StarsMob className="md:hidden" />
            <StarsDesc className="hidden md:block" />
          </div>

          <div className="flex flex-col text-start md:text-left">
            <h2 className="text-4xl text-white mb-10">
              “At Positivus, we believe that success is built on innovation,
              collaboration, and a relentless focus on delivering results.”
            </h2>
            <p className="hidden md:block text-white text-2xl">
              — John Smith, Founder of Positivus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stars;
