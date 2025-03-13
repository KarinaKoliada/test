import Footer from "../components/Footer/Footer";
import UpdatedNavbar from "../components/Navbar/UpdatedNavbar";
import Pricing from "../components/PriceBlock/Pricing/Pricing";
import Questions from "../components/PriceBlock/Questions/Questions";

const Price = () => {
  return (
    <>
      <UpdatedNavbar
        showButton={true}
        className="mt-8 mb-10 md:mt-14 md:mb-16 "
      />
      <Pricing />
      <Questions />
      <Footer />
    </>
  );
};

export default Price;
