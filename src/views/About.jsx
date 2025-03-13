import Awards from "../components/aboutUs/Awards/Awards";
import CoreValues from "../components/aboutUs/CoreValues/CoreValues";
import Join from "../components/aboutUs/Join/Join";
import Journey from "../components/aboutUs/Journey/Journey";
import OurImpact from "../components/aboutUs/OurImpact/OurImpact";
import Stars from "../components/aboutUs/Stars/Stars";
import Success from "../components/aboutUs/Success/Success";
import Footer from "../components/Footer/Footer";
import UpdatedNavbar from "../components/Navbar/UpdatedNavbar";

const About = () => {
  return (
    <>
      <UpdatedNavbar
        showButton={true}
        className="mt-8 mb-10 md:mt-14 md:mb-16 "
      />
      <Success />
      <OurImpact />
      <Journey />
      <CoreValues />
      <Awards />
      <Join />
      <Stars />
      <Footer />
    </>
  );
};

export default About;
