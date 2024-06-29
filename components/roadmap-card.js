import PropTypes from "prop-types";

const RoadmapCard = ({
  className = "",
  background,
  q22024,
  ideationAndWireframingOfT,
  userExperienceImprovement,
  projectPlanningAndStructu,
  planningMarketingStrategi,
  addionalProp,
  q2,
}) => {
  return (
    <div
      className={`h-[380px] rounded-21xl bg-black1 box-border overflow-hidden flex flex-col items-center justify-start relative gap-[40px] w-full text-left text-21xl text-green font-space-grotesk border-[1px] border-solid border-gray-100 mq825:max-w-[400px] ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] object-cover"
        alt=""
        src={background}
      />
      <div className="w-[245px] flex flex-col items-start justify-center py-0 px-0 box-border relative gap-[20px] max-w-[76%] z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start mt-[30px]">
          <div className="self-stretch relative leading-[48px] font-medium mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            {q22024}
          </div>
          <div className="self-stretch relative text-xl leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
            {ideationAndWireframingOfT}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-base text-white font-archivo">
          <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/keyboard-arrow-right.svg"
            />
            <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
              {userExperienceImprovement}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/keyboard-arrow-right.svg"
            />
            <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
              {projectPlanningAndStructu}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/keyboard-arrow-right.svg"
            />
            <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
              {planningMarketingStrategi}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/keyboard-arrow-right.svg"
            />
            <div className="flex-1 relative tracking-[0.02em] leading-[24px] font-light">
              {addionalProp}
            </div>
          </div>
        </div>
        <b className="absolute !m-[0] top-[0px] right-[-20px] text-101xl leading-[120px] inline-block text-[transparent] [-webkit-text-stroke:1px_#14f195] opacity-[0.6] z-[1] mq450:text-11xl mq450:leading-[48px] mq825:text-29xl mq825:leading-[72px]">
          {q2}
        </b>
      </div>
    </div>
  );
};

RoadmapCard.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  q22024: PropTypes.string,
  ideationAndWireframingOfT: PropTypes.string,
  userExperienceImprovement: PropTypes.string,
  projectPlanningAndStructu: PropTypes.string,
  planningMarketingStrategi: PropTypes.string,
  q2: PropTypes.string,
};

export default RoadmapCard;
