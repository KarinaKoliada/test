import PropTypes from "prop-types";
import LinkBtn from "../LinkBtn/LinkBtn";

const FreeProposal = ({ picture, title, className }) => {
  return (
    <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px] pb-[60px] md:pb-[75px] lg:pb-[100px] xl:pb-[164px]">
      <div
        className={`flex py-[40px] px-[35px] md:py-[40px] md:px-[35px] justify-between md:h-[347px] items-center rounded-[45px] lg:px-[60px] ${className}`}
      >
        <div className="flex lg:w-1/2 flex-col items-start justify-between gap-[26px]">
          <h3 className="text-2xl md:text-3xl">{title}</h3>
          <p className="text-base md:text-lg">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <LinkBtn mode="primary" link="#form">
            Get your free proposal
          </LinkBtn>
        </div>
        <div className="hidden lg:pr-[80px] xl:pr-[100px] lg:flex items-center">
          <img className="max-w-none" src={picture} alt="illustration" />
        </div>
      </div>
    </div>
  );
};

FreeProposal.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FreeProposal;
