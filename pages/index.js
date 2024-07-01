import FrameComponent1 from "../components/frame-component11";
import WhyWazaa from "../components/why-wazaa";
import HowToBuy from "../components/how-to-buy";
import FrameComponent2 from "../components/frame-component21";
import FrameComponent3 from "../components/frame-component3";
import Swap from "../components/swap";
import Tokenomics from "../components/tokenomics";
import Roadmap from "../components/roadmap";
import Footer from "../components/footer";
import FrameComponent5 from "../components/frame-component5.js";
import EnviarSol from "../components/enviarsol.js";
import EnviarSpl from "../components/EnviarToken2022.js"


const Desktop = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-5 px-0 pb-0 box-border opacity-[0.99] leading-[normal] tracking-[normal]">
      <FrameComponent1 />
      <WhyWazaa />
      <HowToBuy />
      {/* <FrameComponent2 /> */}
      {/* <FrameComponent3 /> */}
      <Swap />
      <EnviarSol />
      <EnviarSpl />
      <Tokenomics />
      <FrameComponent5 />
      {/* <Roadmap /> */}
      <Footer />
    </div>
  );
};

export default Desktop;
