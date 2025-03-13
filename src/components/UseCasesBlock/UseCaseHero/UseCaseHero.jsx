import HeroSection from "../../../HeroSection/HeroSection";
import { ProvenTabProps } from "../../../HeroSection/HeroSectionSettings";

const UseCaseHero = () => {
  return (
    <section id="use-case-hero" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <HeroSection
          title={ProvenTabProps.title}
          desc={ProvenTabProps.desc}
          img={ProvenTabProps.img}
          className={"mb-8 md:mb-10 lg:mb-16 xl:mb-[80px] "}
        />
      </div>
    </section>
  );
};

export default UseCaseHero;
