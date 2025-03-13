import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavbarSettings } from "./NavbarSettings";
import PositivusLogo from "../../assets/positivus.svg?react";
import Romb from "../../assets/romb.svg?react";
import BurgerMenu from "../../assets/burger-icon.svg?react";

const UpdatedNavbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`flex items-center  md:justify-between  ${className}`}>
      <div className="px-5 w-full mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="flex w-full items-center gap-2 justify-between">
          <a href="/" className="flex items-center gap-1 md:gap-3 lg:gap-5">

              {" "}
              <Romb className="text-black" />
              <PositivusLogo className="text-black" />
          </a>
          <button
            className="lg:hidden border-none bg-transparent focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-4xl text-black font-bold w-6 h-4">
                &times;
              </span>
            ) : (
              <BurgerMenu />
            )}
          </button>
          <nav
            className={`${
              isOpen
                ? "fixed inset-0 w-full gap-10  py-20 px-20 bg-white z-50 flex flex-col items-center transition-opacity duration-300 "
                : "hidden lg:flex md:items-center md:gap-10"
            }`}
          >
            {isOpen && (
              <button
                className="absolute top-5 right-5 text-4xl text-black font-bold bg-transparent border-none focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            )}

            {NavbarSettings.map(({ page, link }) => (
              <a
                href={`${link}`}
                key={page}
                className="text-lg md:text-3xl lg:text-xl whitespace-nowrap text-center text-[#191a23] transition-all duration-400 px-2 rounded-[9px] hover:bg-[#b9ff66]"
                onClick={() => setIsOpen(false)}
              >
                {page}
              </a>
            ))}

            <a
              className="border border-[#191a23] w-full px-5 py-3 rounded-[14px] text-[16px] leading-[24px] 
              text-center bg-transparent transition-all duration-600 ease-in-out 
              hover:bg-[#191a23] hover:text-white"
              href="#form"
              onClick={() => setIsOpen(false)}
            >
              Request a quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

UpdatedNavbar.propTypes = {
  isFooter: PropTypes.bool,
  className: PropTypes.string,
};

export default UpdatedNavbar;
