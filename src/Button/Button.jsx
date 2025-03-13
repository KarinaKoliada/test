import PropTypes from "prop-types";

const Button = ({ mode, children }) => {
  if (mode === "primary") {
    return (
      <button className="flex w-full border py-5 px-9 rounded-[14px] justify-center items-center bg-black  text-white hover:bg-transparent hover:text-black transition-all duration-300">
        {children}
      </button>
    );
  }

  if (mode === "secondary") {
    return (
      <button className="flex whitespace-nowrap overflow-hidden border py-5 px-9 rounded-[14px] justify-center items-center bg-[#b9ff66] text-[black]  hover:bg-transparent hover:text-white hover:border-white border-[#b9ff66]  transition-colors duration-300">
        {children}
      </button>
    );
  }

  if (mode === "white") {
    return (
      <button className="flex w-full border py-5 px-9 rounded-[14px] justify-center items-center bg-white  text-black hover:bg-transparent hover:text-white transition-all duration-300">
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  mode: PropTypes.oneOf(["primary", "secondary", "white"]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  mode: "primary",
};

export default Button;
