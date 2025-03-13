import HeroSection from "../../../HeroSection/HeroSection";
import { MarketingTabProps } from "../../../HeroSection/HeroSectionSettings";

const HeroBlog = () => {
  return (
    <section id="hero-blog" className="pb-[60px] md:pb-[140px] bg-[#F3F3F3] lg:bg-transparent">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <HeroSection
          title={MarketingTabProps.title}
          desc={MarketingTabProps.desc}
          subTitle={MarketingTabProps.subTitle}
          img={MarketingTabProps.img}
          className={"mb-8 md:mb-10 lg:mb-16 xl:mb-[80px] "}

        />
      </div>
    </section>
  );
};

export default HeroBlog;
