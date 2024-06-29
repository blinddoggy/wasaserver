import PropTypes from "prop-types";

const Box = ({
  className = "",
  innovativeEcosystem,
  aHolisticApproachCombinin,
}) => {
  return (
    <div
      className={`flex-1 rounded-21xl bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[300px] h-full pt-[38px] px-[38px] pb-[70px] gap-[20px] text-left text-13xl text-purple font-space-grotesk border-[1px] border-solid border-gray-100 ${className}
      mq1350:pt-[34px] mq1350:px-[20px] mq1350:pb-[40px]`}
    >
      <div className="self-stretch flex flex-col items-start justify-center">
        <h1 className="m-0 self-stretch relative text-inherit leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[19px] mq825:text-7xl mq825:leading-[26px]">
          {innovativeEcosystem}
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start text-base text-white font-archivo">
        <div className="flex-1 relative tracking-[0.02em] leading-[25.6px] font-light">
          {aHolisticApproachCombinin}
        </div>
      </div>
    </div>
  );
};

Box.propTypes = {
  className: PropTypes.string,
  innovativeEcosystem: PropTypes.string,
  aHolisticApproachCombinin: PropTypes.string,
};

export default Box;
