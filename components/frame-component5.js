import RoadmapCard from "./roadmap-card";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-xl text-gray-400 font-space-grotesk ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start py-[120px] px-0 box-border gap-[80px] max-w-full mq450:gap-[20px] mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq825:gap-[40px] mq825:pt-[78px] mq825:pb-[78px] mq825:box-border">
        <div className="w-[747px] flex flex-col items-start justify-start max-w-full">
          <b className="relative leading-[24px] inline-block min-w-[86px] mq450:text-base mq450:leading-[19px]">
            roadmap
          </b>
          <h1 className="m-0 self-stretch relative text-61xl leading-[80px] font-light font-inherit text-green mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
            roadmap highlights
          </h1>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(4,_minmax(244px,_1fr))] text-21xl text-green
          lg:justify-center lg:grid-cols-[repeat(2,_minmax(244px,_422px))] mq825:grid-cols-[minmax(244px,_1fr)] mq825:justify-items-center">
          <RoadmapCard
            background="/background-3@2x.png"
            q22024="Q2 2024"
            ideationAndWireframingOfT="Ideation and Wireframing of the Website"
            userExperienceImprovement="User Experience Improvements"
            projectPlanningAndStructu="Project structuring and development"
            planningMarketingStrategi="Planning Marketing Strategies"
            addionalProp="Private pre sale (success)"
            q2="Q2"
          />
          <div className="h-[380px] rounded-21xl bg-black1 box-border overflow-hidden flex flex-col items-center justify-start relative gap-[40px] w-full border-[1px] border-solid border-gray-100 mq825:max-w-[400px]">
            <img
              className="w-full h-full absolute !m-[0] object-cover"
              alt=""
              src="/background-4@2x.png"
            />
            <div className="w-[245px] flex flex-col items-start justify-center py-0 px-0 box-border relative gap-[20px] max-w-[76%] z-[1]">
              <div className="self-stretch flex flex-col items-start justify-start mt-[30px]">
                <div className="self-stretch relative leading-[48px] font-medium mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
                  Q3 2024
                </div>
                <div className="self-stretch relative text-xl leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
                  Website Launch
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-white font-archivo">
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    New marketing strategies
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    Private Sale
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    ICO's
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    Token Listing (DEX)
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    AI development 
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    New listing (DEX/CEX0)
                  </div>
                </div>
              </div>
              <b className="absolute !m-[0] top-[0px] right-[-5px] text-101xl leading-[120px] inline-block text-[transparent] [-webkit-text-stroke:1px_#14f195] opacity-[0.6] z-[1] mq450:text-11xl mq450:leading-[48px] mq825:text-29xl mq825:leading-[72px]">
                Q3
              </b>
            </div>
          </div>
          <div className="h-[380px] rounded-21xl bg-black1 box-border overflow-hidden flex flex-col items-center justify-start relative gap-[40px] w-full border-[1px] border-solid border-gray-100 mq825:max-w-[400px]">
            <img
              className="w-full h-full absolute !m-[0] object-cover"
              alt=""
              src="/background-5@2x.png"
            />
            <div className="w-[245px] flex flex-col items-start justify-center py-0 px-0 box-border relative gap-[20px] max-w-[76%] z-[1]">
              <div className="self-stretch flex flex-col items-start justify-start mt-[30px]">
                <div className="self-stretch relative leading-[48px] font-medium mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
                  Q4 2024
                </div>
                <div className="self-stretch relative text-xl leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
                  SPI protocol structuring
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-white font-archivo">
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    Launch of the Wazaaa brand in clothing and merchandise.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    Website and User Experience Improvements
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    AI launch
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    Wazaaa games development
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    New listing CEX 
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/keyboard-arrow-right.svg"
                  />
                  <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
                    New marketing strategies
                  </div>
                </div>
              </div>
              <b className="absolute !m-[0] top-[0px] right-[-7px] text-101xl leading-[120px] inline-block text-[transparent] [-webkit-text-stroke:1px_#14f195] opacity-[0.6] z-[1] mq450:text-11xl mq450:leading-[48px] mq825:text-29xl mq825:leading-[72px]">
                Q4
              </b>
            </div>
          </div>
          <RoadmapCard
            background="/background-6@2x.png"
            q22024="Q1 2025"
            ideationAndWireframingOfT="Wazaaa game launch"
            userExperienceImprovement="New drop Wazaa outfits"
            projectPlanningAndStructu="SPI Launch"
            planningMarketingStrategi="New listing on (CEX)"
            addionalProp="New marketing strategies"
            q2="Q1"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
