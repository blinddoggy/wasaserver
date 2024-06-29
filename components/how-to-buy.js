import Content from "../components/content";
import FrameComponent1 from "../components/frame-component1";

const HowToBuy = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[158px] box-border max-w-full mq825:pb-[103px] mq825:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
          <Content />
          <FrameComponent1 />
        </div>
    </section>
  );
};

export default HowToBuy;
