import GreenStar from "../../../assets/casesBlock/green-star.svg?react";
import { FeaturedSetting } from "./FeaturedSettings";
import ArrowBtn from "../../../assets/casesBlock/green-btn.svg?react";

const Featured = () => {
  return (
    <section id="featured" className="pb-[60px] md:pb-[140px]">
      <div className="px-3 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-10 justify-between rounded-[45px] px-10 pt-10 pb-[50px] border bg-[#191A23]">
          <div className="lg:hidden w-5 h-5">
            <GreenStar className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-[25px] lg:w-1/2">
            <h2 className="hidden lg:block px-[7px] w-fit border border-[#B9FF66] bg-[#B9FF66] rounded-[7px]">
              Featured Success Story
            </h2>
            <h3 className="uppercase lg:hidden text-[#B9FF66] text-[26px]">
              Featured
            </h3>
            <h3 className="text-[26px] text-white lg:text-3xl">
              Scaling Success for a Leading E-Commerce Brand
            </h3>
            <p className="text-lg text-white">
              Through a comprehensive SEO and PPC strategy, we helped this
              e-commerce brand increase visibility, drive traffic, and boost
              sales.
            </p>

            <div className="hidden lg:flex lg:justify-start">
              <a
                href="#"
                className="relative flex justify-start items-center gap-[15px] text-[#B9FF66] font-medium text-xl"
              >
                <ArrowBtn className="w-10 h-10" />
                <span>Read</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-center lg:w-1/2">
            {FeaturedSetting.map(({ number, desc }) => (
              <div
                key={number}
                className="border gap-[10px] border-white rounded-[25px] bg-white px-7 py-[30px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:bg-[#B9FF66] cursor-pointer"
              >
                <h2 className="text-[40px] font-medium text-[#191A23]">
                  {number}
                </h2>
                <p className="text-lg">{desc}</p>
              </div>
            ))}
                        <div className="lg:hidden flex justify-start">
              <a
                href="#"
                className="relative flex justify-start items-center gap-[15px] text-[#B9FF66] font-medium text-xl"
              >
                <ArrowBtn className="w-10 h-10" />
                <span>Read</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
