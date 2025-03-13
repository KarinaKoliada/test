import GreenStar from "../../../assets/servicesExpert/green-vector.svg?react";
import LinkBtn from "../../../LinkBtn/LinkBtn";
import CoveredTitle from "../../../CoveredTitle/CoveredTitle";
import { optimizationTabProps } from "../../Service/ServicesSettings";
const title1 = "Search engine";
const title2 = "optimization";
const Optimization = () => {
  return (
    <section id="optimization" className="scroll-mt-5 pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="px-10 pt-10 pb-[50px] lg:pt-[60px] lg:pb-[68px] lg:pl-[40px] lg:pr-[100px] rounded-[45px] bg-[#191A23] ">
          <div className="flex gap-5 lg:flex-row lg:gap-14">
            <div className="w-5 h-5 lg:w-9 lg:h-9">
              <GreenStar className=" w-5 h-5 lg:w-9 lg:h-9 rotate-45 lg:rotate-0" />
            </div>
            <div>
              <h3 className="lg:hidden uppercase  mb-5 text-[#B9FF66] text-[26px]">
                Featured
              </h3>

              <div>
                <div className="flex flex-col lg:flex-row text-start">
                  <CoveredTitle
                    className="mb-5 lg:mb-0 pr-5 text-2xl md:text-4xl lg:text-3xl"
                    setting={{ titleBackgroundColor: "#B9FF66" }}
                    title1={title1}
                    title2={title2}
                  />

                  <p className="mb-5 lg:mb-[50px] text-white text-lg text-left leading-6">
                    {optimizationTabProps.desc}
                  </p>
                </div>
                <LinkBtn mode={"secondary"} link={"#form"}>
                  Boost My Rankings
                </LinkBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optimization;
