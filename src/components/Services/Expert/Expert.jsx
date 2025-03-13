import HeroSection from "../../../HeroSection/HeroSection";
import { ExpertTabProps } from "../../../HeroSection/HeroSectionSettings";

const Expert = () => {
  return (
    <section id="expert" className="mb-[60px] lg:mb-[120px]">
      <div className="w-full px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <HeroSection
          title={ExpertTabProps.title}
          desc={ExpertTabProps.desc}
          img={ExpertTabProps.img}
        />
      </div>
    </section>
  );
};

export default Expert;
