import Service from "../components/Service/Service";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Studies from "../components/Studies/Studies";
import WorkingProcess from "../components/WorkingProcess/WorkingProcess";
import Team from "../components/Team/Team";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import UpdatedNavbar from "../components/Navbar/UpdatedNavbar";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <UpdatedNavbar
        showButton={true}
        className="mt-8 mb-10 md:mt-14 md:mb-16 "
      />

      <Hero />
      <Service />
      <CaseStudies />
      <Studies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
