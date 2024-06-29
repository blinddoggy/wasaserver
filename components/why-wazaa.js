import Box from "./box";
import PropTypes from "prop-types";

const WhyWazaa = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[120px] box-border max-w-full text-left text-xl text-gray-400 font-space-grotesk 
        mq450:p-4 mq825:p-4 mq450:pb-[51px] mq450:box-border mq825:pb-[78px] mq825:box-border ${className}`}
    >
      <div className="flex-1 rounded-21xl bg-black1 bg-[url('/background-why-wazaa.png')] bg-cover box-border overflow-hidden flex flex-col items-start justify-start py-[118px] px-[39px] relative gap-[50px] max-w-full border-[1px] border-solid border-gray-100 mq825:gap-[25px] mq825:pt-[77px] mq825:pb-[77px] mq825:box-border">
        {/* <img
          className="w-[2000px] h-[1732.3px] absolute !m-[0] bottom-[-533.3px] left-[calc(50%_-_1000px)] object-cover"
          alt=""
          src="/background-11@2x.png"
        /> */}
        <div className="self-stretch flex flex-row items-start justify-center max-w-full">
          <div className="flex flex-col items-start justify-start max-w-full">
            <b className="w-[510px] relative leading-[24px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[19px]">
              why Wazaaa
            </b>
            <h1 className="m-0 relative text-61xl leading-[80px] text-purple z-[1] font-inherit mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
              <span className="font-light">{`Why Choose `}</span>
              <span className="font-medium">Wazaaa</span>
              <span className="font-light"> Token?</span>
            </h1>
          </div>
        </div>
        <div className="w-full overflow-x-auto grid grid-cols-4 items-center justify-items-center gap-[20px] max-w-full z-[1] text-13xl text-purple
          lg:grid-cols-2 mq600:grid-cols-1">
          <Box
            innovativeEcosystem="Innovative Ecosystem"
            aHolisticApproachCombinin="A holistic approach combining gaming, fashion,SPI, AI, DEFI and community."
          />
          <Box
            innovativeEcosystem="Strong Community Support:"
            aHolisticApproachCombinin="A dedicated and passionate community that drives the project forward."
          />
          <Box
            innovativeEcosystem="Robust Blockchain"
            aHolisticApproachCombinin="Built on the reliable and high-performance Solana blockchain."
          />
          <Box
            innovativeEcosystem="Growth Potential"
            aHolisticApproachCombinin="Positioned for exponential growth with a clear vision and roadmap."
          />
        </div>
      </div>
    </section>
  );
};

WhyWazaa.propTypes = {
  className: PropTypes.string,
};

export default WhyWazaa;
