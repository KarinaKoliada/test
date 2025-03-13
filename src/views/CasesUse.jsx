import Footer from "../components/Footer/Footer";
import UpdatedNavbar from "../components/Navbar/UpdatedNavbar";
import Testimonials from "../components/Testimonials/Testimonials";
import Featured from "../components/UseCasesBlock/Featured/Featured";
import StoriesSuccess from "../components/UseCasesBlock/StoriesSuccess/StoriesSuccess";
import SuccessProposal from "../components/UseCasesBlock/SuccessProposal/SuccessProposal";
import UseCaseHero from "../components/UseCasesBlock/UseCaseHero/UseCaseHero";

const CasesUse = () => {
  return (
    <>
      <UpdatedNavbar
        showButton={true}
        className="mt-8 mb-10 md:mt-14 md:mb-16 "
      />
      <UseCaseHero />
      <Featured />
      <StoriesSuccess />
      <Testimonials className={"hidden md:block"} />
      <SuccessProposal />
      <Footer />
    </>
  );
};

export default CasesUse;
