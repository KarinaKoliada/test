import LinkBtn from "../../../LinkBtn/LinkBtn";
import JoinIllustration from "../../../assets/aboutUs/join.svg?react";

const Join = () => {
  return (
    <section id="join-us" className="mb-[60px] lg:mb-[120px]">
      <div className="w-full px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="border border-black rounded-[45px] px-[50px] pt-[60px] pb-[82px] lg:px-16 lg:pt-10 lg:pb-16 bg-[#B9FF66]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-center lg:text-left">
            <div className="lg:max-w-[50%]">
              <h3 className="text-3xl mb-[26px]">Join Our Team</h3>
              <p className="text-lg mb-[26px]">
                At Positivus, we thrive on innovation and collaboration.
                We&apos;re always looking for passionate individuals to join our
                team and help businesses grow. Ready to make an impact?
              </p>
              <div className="w-full">
                <LinkBtn mode="primary" link="#form" className={"w-full"}>
                  {" "}
                  Explore Careers
                </LinkBtn>
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex justify-center mt-[30px] lg:mt-0">
              <JoinIllustration className="w-full max-w-[400px] lg:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
