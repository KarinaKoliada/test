import PropTypes from "prop-types";
import ServiceItem from "../components/ServiceItem/ServiceItem";

const ServicesCards = ({ settings, theme }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {settings.map(
        ({ img, alt, title1, title2, theme: originalTheme }, index) => (
          <ServiceItem
            key={index}
            img={img}
            alt={alt}
            title1={title1}
            title2={title2}
            theme={theme || originalTheme}
          />
        )
      )}
    </div>
  );
};

ServicesCards.propTypes = {
  settings: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title1: PropTypes.string.isRequired,
      title2: PropTypes.string.isRequired,
      theme: PropTypes.oneOf(["light", "green", "black", "grey"]).isRequired,
    })
  ).isRequired,
  theme: PropTypes.oneOf(["light", "green", "black", "grey"]),
};

export default ServicesCards;
