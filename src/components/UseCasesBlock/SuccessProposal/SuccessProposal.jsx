import FreeProposal from "../../../FreeProposal/FreeProposal";
import Illustration from "../../../assets/casesBlock/illustration.svg";
const SuccessProposal = () => {
  return (
    <section id="success-proposal" className="flex  scroll-mt-5 items-center">
      <FreeProposal
        title="Let`s Create Your Next Success Story"
        picture={Illustration}
        className="bg-[#B9FF66]"
      />
    </section>
  );
};

export default SuccessProposal;
