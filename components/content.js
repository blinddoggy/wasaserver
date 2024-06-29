import StepPairTwo from "./step-pair-two";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start relative gap-[65px] max-w-full text-left text-xl text-gray-400 font-space-grotesk lg:flex-wrap mq450:gap-[16px] mq825:gap-[32px] ${className}`}
    >
      <div className="w-[510px] flex flex-col items-start justify-start min-w-[510px] max-w-full lg:flex-1 mq825:min-w-full">
        <b className="self-stretch relative leading-[24px] mq450:text-base mq450:leading-[19px]">
          buy
        </b>
        <h1 className="m-0 relative text-61xl leading-[80px] font-light font-inherit text-green mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
          <p className="m-0">how to</p>
          <p className="m-0">buy it?</p>
        </h1>
      </div>
      <div className="h-2 w-[119px] absolute !m-[0] top-[53px] right-[535px] bg-mediumspringgreen-100" />
      <div className="flex-1 flex flex-col items-start justify-start gap-[19.5px] min-w-[510px] max-w-full text-white mq825:min-w-full">
        <div className="w-[736.5px] flex flex-row items-start justify-start gap-[68.5px] max-w-full mq450:gap-[17px] mq825:flex-wrap mq825:gap-[34px]">
          <div className="w-[324px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
              <div className="h-16 w-16 rounded-17xl flex flex-row items-center justify-center p-4 box-border">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/altdelsitio.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border min-w-[156px]">
                <div className="self-stretch relative leading-[20px] z-[1] mq450:text-base mq450:leading-[16px]">
                  <span className="font-light">{`Visit `}</span>
                  <span className="font-medium">wazaaa.ia</span>
                </div>
              </div>
            </div>
          </div>
          <StepPairTwo
            cartera1="/cartera-1.svg"
            openYourPhantomOrBackpack="Open your phantom or backpack wallet"
          />
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-green" />
        <div className="w-[736.5px] flex flex-row items-start justify-start gap-[68.5px] max-w-full mq450:gap-[17px] mq825:flex-wrap mq825:gap-[34px]">
          <div className="w-[324px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
              <div className="h-16 w-16 rounded-17xl flex flex-row items-center justify-center p-4 box-border">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/actualizar-1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[156px]">
                <div className="self-stretch relative leading-[20px] font-light mq450:text-base mq450:leading-[16px]">
                  Click on "Buy Wazaaa" on the website, and swap SOL for Wazaaa.
                </div>
              </div>
            </div>
          </div>
          <StepPairTwo
            cartera1="/estrella-1.svg"
            openYourPhantomOrBackpack="You are now part of the Wazaaa community! Welcome to Wazaaa!"
          />
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
