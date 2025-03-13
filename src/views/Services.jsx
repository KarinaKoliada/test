import Footer from "../components/Footer/Footer";
import UpdatedNavbar from "../components/Navbar/UpdatedNavbar";
import Expert from "../components/Services/Expert/Expert";
import Optimization from "../components/Services/Optimization/Optimization";
import OtherServices from "../components/Services/OtherServices/OtherServices";
import Process from "../components/Services/Process/Process";
import SearchRanking from "../components/Services/SearchRanking/SearchRanking";
import ServicesCases from "../components/Services/ServicesCases/ServicesCases";

const Services = () => {
  return (
    <>
      <UpdatedNavbar
        showButton={true}
        className="mt-8 mb-10 md:mt-14 md:mb-16 "
      />
      <Expert />
      <Optimization />
      <Process />
      <ServicesCases />
      <OtherServices />
      <SearchRanking />
      <Footer />
    </>
  );
};

export default Services;
