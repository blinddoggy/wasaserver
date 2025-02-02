import Header from "./header";
import Hero from "./hero";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center pt-0 px-10 pb-[120px] box-border max-w-full text-center text-xl text-gray-400 font-space-grotesk lg:pb-[78px] lg:box-border
        mq450:p-4 mq825:p-4 mq825:pb-[51px] mq825:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-[40px] max-w-full">
        <div className="w-full flex flex-col items-center justify-start xl:px-20 mq450:p-2">
          <Header />
        </div>
        <div className="w-full flex flex-col items-center justify-start xl:px-20 mq450:p-2">
          <Hero />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
