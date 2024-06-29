import PropTypes from "prop-types";

const StepPairTwo = ({
  className = "",
  cartera1,
  openYourPhantomOrBackpack,
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[19.5px] min-w-[224px] max-w-full text-left text-xl text-white font-space-grotesk mq450:flex-wrap ${className}`}
    >
      <div className="h-[105px] w-px relative box-border border-r-[1px] border-solid border-green mq450:w-full mq450:h-px" />
      <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
        <div className="w-16 h-16 rounded-17xl flex flex-row items-center justify-center p-4 box-border">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={cartera1}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[156px]">
        <div className="self-stretch relative leading-[20px] font-light mq450:text-base mq450:leading-[16px]">
          {openYourPhantomOrBackpack}
        </div>
      </div>
    </div>
  );
};

StepPairTwo.propTypes = {
  className: PropTypes.string,
  cartera1: PropTypes.string,
  openYourPhantomOrBackpack: PropTypes.string,
};

export default StepPairTwo;
