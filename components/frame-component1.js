import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xl text-white font-space-grotesk ${className}`}
    >
      <div className="w-[670px] grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(3,_minmax(157px,_1fr))] mq450:grid-cols-[minmax(157px,_1fr)] mq825:justify-center mq825:grid-cols-[repeat(2,_minmax(157px,_273px))]">
        <div className="rounded-21xl overflow-hidden flex flex-col items-center justify-center p-[38px] w-full relative gap-[10px] border-[1px] border-solid border-gray-100 bg-[url('/textura-11@2x.png')] bg-cover">
          <div className="relative w-[80px] h-[80px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/raydium.svg"
            />
          </div>
          <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
            Raydium
          </div>
        </div>
        <div className="rounded-21xl overflow-hidden flex flex-col items-center justify-center p-[38px] w-full relative gap-[10px] border-[1px] border-solid border-gray-100 bg-[url('/textura-11@2x.png')] bg-cover">
          <div className="relative w-[80px] h-[80px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/backpack-logo-icon.svg"
            />
            <img
              className="absolute top-[16px] left-[23.5px] w-[33px] h-12 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/backpack-logo-1@2x.png"
            />
          </div>
          <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
            Backpack
          </div>
        </div>
        <div className="rounded-21xl overflow-hidden flex flex-col items-center justify-center p-[38px] w-full relative gap-[10px] border-[1px] border-solid border-gray-100 bg-[url('/textura-11@2x.png')] bg-cover">
          <div className="relative w-[80px] h-[80px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/phantom.svg"
            />
          </div>
          <div className="w-[140px] relative leading-[40px] font-medium inline-block z-[2] mq450:text-base mq450:leading-[32px]">
          Phantom
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
