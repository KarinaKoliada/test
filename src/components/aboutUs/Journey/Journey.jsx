import { JourneySettings } from "./JourneySettings";
import GreenStar from "../../../assets/aboutUs/green-star.svg?react";
import Spin from "../../../assets/aboutUs/spin.svg?react";
import SectionTab from "../../SectionTab/SectionTab";
import { journeyTabProps } from "../../Service/ServicesSettings";

const Journey = () => {
  return (
    <>
      <section
        id="our-journey"
        className="mb-16 lg:mb-[140px] lg:relative lg:overflow-hidden"
      >
        <div className="w-full px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
          <SectionTab
            title={journeyTabProps.title}
            desc={journeyTabProps.desc}
            className="mb-[40px] lg:mb-[60px] xl:mb-[80px]"
          />
          <ul className="relative lg:static flex flex-col gap-10 lg:gap-[70px]">
            <div className="absolute left-12 top-10 bottom-0 w-[1px] bg-[#B9FF66] z-10 lg:hidden"></div>
            <Spin className="absolute -left-28 top-[400px] hidden lg:block" />
            <Spin className="absolute -right-28 top-[750px] hidden lg:block" />
            {JourneySettings.map(({ number, title, desc }, index) => (
              <li
                className={`relative lg:flex lg:items-start ${
                  index % 2 === 1 ? "lg:ml-auto" : "lg:mr-auto"
                }`}
                key={number}
              >
                <div className="flex gap-5 items-center ">
                  <GreenStar className="absolute left-[30px] w-9 h-9 z-20 lg:hidden" />
                  <h1 className="flex  items-start mr-7 ml-24 lg:ml-0">
                    {number}
                  </h1>
                </div>

                <div className="pl-16 lg:px-[120px] flex py-10 flex-col items-start gap-5 rounded-[45px] border max-w-[600px] border-[#191A23] bg-[#191A23]">
                  <div className="flex items-center gap-3 relative">
                    <GreenStar className="absolute -left-6 w-4 h-4 rotate-45 lg:hidden" />
                    <h3 className="text-white  pl-8 lg:pl-0">{title}</h3>
                  </div>
                  <span className="text-white pl-8 lg:pl-0">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Journey;
