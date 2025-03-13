import { SuccessTabProps } from "../../../HeroSection/HeroSectionSettings";
import HeroSection from "../../../HeroSection/HeroSection";

const Success = () => {
  return (
    <section id="success" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px] ">
        <HeroSection
          title={SuccessTabProps.title}
          desc={SuccessTabProps.desc}
          img={SuccessTabProps.img}
        />
      </div>
    </section>
  );
};

export default Success;
