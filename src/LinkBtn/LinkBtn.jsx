import PropTypes from "prop-types";

const LinkBtn = ({ mode, children, link, className, style }) => {
  if (mode === "primary") {
    return (
      <a
        href={link}
        className={`flex items-center w-full  px-[35px] py-5 gap-[10px] 
        rounded-[14px] bg-[#191a23] justify-center text-white text-xl 
        leading-7 text-center transition-all duration-[600ms] ease-in-out 
        hover:bg-white hover:text-black hover:border hover:border-black ${className}`}
      >
        {children}
      </a>
    );
  }
  if (mode === "secondary") {
    return (
      <a
        href={link}
        className={`flex items-center w-full px-[35px] py-5 gap-[10px] 
        rounded-[14px] bg-white justify-center text-black text-xl 
        leading-7 text-center transition-all duration-[600ms] ease-in-out 
        hover:bg-[#191a23] hover:text-white hover:border hover:border-black ${className}`}
      >
        {children}
      </a>
    );
  }

  if (mode === "green") {
    return (
      <a
        href={link}
        className={`flex items-center w-full px-[35px] py-5 gap-[10px] 
        rounded-[14px] bg-[#B9FF66] justify-center text-black text-xl 
        leading-7 text-center transition-all duration-[600ms] ease-in-out 
        hover:bg-[#191a23] hover:text-white hover:border hover:border-black ${className}`}
      >
        {children}
      </a>
    );
  }

  if (mode === "noColor") {
    return (
      <a
        href={link}
        className={`flex items-center w-full px-[35px] py-5 gap-[10px] 
        rounded-[14px]  justify-center text-xl border
        leading-7 text-center transition-all duration-[600ms] ease-in-out 
         hover:border ${className}`}
        style={style}
      >
        {children}
      </a>
    );
  }

  return null;
};

LinkBtn.propTypes = {
  mode: PropTypes.oneOf(["primary", "secondary", "green", "noColor"])
    .isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

LinkBtn.defaultProps = {
  className: "",
  style: {},
};

export default LinkBtn;
