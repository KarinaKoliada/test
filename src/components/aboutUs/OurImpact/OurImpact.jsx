import SectionTab from "../../SectionTab/SectionTab";
import { impactTabProps } from "../../Service/ServicesSettings";
import { OurImpactSettings } from "./OurImpactSettings";

const OurImpact = () => {
  return (
    <section id="our-impact" className="mb-14 lg:mb-36">
      <div className="w-full px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={impactTabProps.title}
          desc={impactTabProps.desc}
          parts={impactTabProps.parts}
          className="mb-[40px] lg:mb-[60px] xl:mb-[80px]"
        />

        <ul className=" flex flex-wrap md:flex-nowrap justify-center w-full">
          {OurImpactSettings.map(({ number, desc }, index) => (
            <li
              key={number}
              className={`flex flex-col w-[220px] md:w-[250px] items-center justify-center lg:justify-start lg:text-start lg:items-start text-center relative`}
            >
              <div
                className={`w-full h-10 border-t border-l border-r rounded-t-[20px]  lg:border-l lg:border-r border-black   ${
                  index === 0 ? "lg:border-l-0 lg:rounded-tl-none" : ""
                } 
               ${
                 index === OurImpactSettings.length - 1
                   ? "lg:border-r-0 lg:rounded-tr-none"
                   : ""
               }
               ${
                 OurImpactSettings.length - 1 !== index &&
                 "border-r rounded-tr-[20px]"
               } ${index !== 0 && "border-l rounded-tl-[20px]"} `}
              ></div>
              <div className="pl-5 pr-3 -mt-[6px]">
                <h2 className="md:text-[30px] text-4xl lg:text-[40px] font-bold">
                  {number}
                </h2>
                <p className="text-base md:text-sm md:whitespace-nowrap lg:text-lg xl:whitespace-nowrap">
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurImpact;
