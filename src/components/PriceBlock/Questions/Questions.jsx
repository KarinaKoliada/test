import { QuestionsSettings } from "./QuestionsSettings";
import Accordion from "../../../Accordion/Accordion";
import CoveredTitle from "../../../CoveredTitle/CoveredTitle";
const title1 = "Frequantly Asked";
const title2 = "Questions";
const Questions = () => {
  return (
    <section id="questions" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="flex justify-center items-center text-center">
          <CoveredTitle
            className="mb-[30px] items-center text-4xl lg:text-[40px]"
            setting={{ titleBackgroundColor: "#B9FF66" }}
            title1={title1}
            title2={title2}
          />{" "}
        </div>
        <ul className="flex flex-col gap-5 md:gap-[30px] mb-[60px] md:mb-[100px] lg:mb-[140px]">
          {QuestionsSettings.map(({ title, text }, index) => (
            <Accordion text={text} title={title} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Questions;
