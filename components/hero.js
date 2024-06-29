import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full text-left text-xl text-gray-400 font-space-grotesk ${className}`}
    >
      <div className="flex-1 rounded-21xl bg-black1 box-border overflow-hidden flex flex-col items-start justify-center p-10 relative gap-[40px] min-w-[435px] max-w-full border-[1px] border-solid border-gray-100 min-h-[800px]
        mq450:min-h-[initial] mq450:p-4 mq825:gap-[20px] mq825:min-w-full">
        <img
          className="w-[1200px] h-[1323.5px] absolute bottom-0 left-[calc(50%_-_600px)] object-cover"
          alt=""
          src="/img-0161-1@2x.png"
        />
        <div className="w-full flex flex-col items-start justify-start max-w-full z-[1] p-5 bg-black1 rounded-21xl">
          <b className="self-stretch relative leading-[24px] text-gray-400 mq450:text-base mq450:leading-[19px]">
            about
          </b>
          <h1 className="m-0 self-stretch relative text-61xl leading-[60px] text-green font-inherit 
            mq1425:text-41xl mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
            <span className="font-light">welcome to</span>
            <br></br>
            <b>wazaa,</b>
            <span className="font-medium">{` `}</span>
            <span className="font-light">the meme-coin</span>
          </h1>
          <h1 className="m-0 self-stretch relative text-101xl leading-[120px] font-bold font-inherit text-[transparent] [-webkit-text-stroke:2px_#14f195]
            mq1425:text-[90px] mq450:text-11xl mq450:leading-[48px] mq825:text-29xl mq825:leading-[72px]">
            killer
          </h1>
        </div>
        <div className="w-full flex flex-row items-start justify-center max-w-full z-[1] text-white font-archivo p-5">
          <div className="flex-1 relative tracking-[0.02em] leading-[32px] font-light inline-block max-w-full mq450:text-base mq450:leading-[26px]">
          Wazaaa Token is a groundbreaking project on the solana blockchain, designed to redefine the crypto landscape. Our mission is to create an innovative and engaging ecosystem that combines the excitement of AI development, gaming, fashion , DEFI,  and a strong, vibrant community.
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-[20px] max-w-full z-[1] mq825:flex-col mq450:flex-wrap p-5">
          <Button
          style={{overflowWrap: "anywhere"}}
            className="justify-between h-11 pr-[6px] mq450:w-full"
            endIcon={
              <div className="flex items-center justify-center rounded-full bg-[#222] w-[38px] h-[38px]">
                <img width="24px" height="24px" src="/content-copy.svg" />
              </div>
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#222",
              fontSize: "16",
              background: "#14f195",
              borderRadius: "44px",
              "&:hover": { background: "#14f195" },
              height: 44,
            }}
            onClick={() => {
              navigator.clipboard.writeText("wazaAgCz4feA4LsQk28ooqHQnDGNhjoShd2njMcoinu");
              alert("Copied the text: " + "wazaAgCz4feA4LsQk28ooqHQnDGNhjoShd2njMcoinu");
            }}
          >
            <span className={"flex items-center justify-center w-full"}>wazaAgCz4feA4LsQk28ooqHQnDGNhjoShd2njMcoinu</span>
          </Button>
          <Button
            className="justify-between h-11 pr-[6px] min-w-[160px] mq450:w-full"
            endIcon={
              <div className="flex items-center justify-center rounded-full bg-[#14f195] w-[38px] h-[38px]">
                <img width="24px" height="24px" src="/arrow-outward-41.svg" />
              </div>
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#14f195",
              fontSize: "16",
              background: "#222",
              border: "#14f195 solid 1px",
              borderRadius: "44px",
              "&:hover": { background: "#222" },
              width: 165,
              height: 44,
            }}
          >
            <span className={"flex flex-row items-center justify-center w-full"}>How to buy</span>
          </Button>
        </div>
      </div>
      <div className="flex-1 rounded-21xl box-border overflow-hidden flex flex-row items-start justify-start relative min-w-[435px] max-w-full text-401xl text-[transparent] font-rubik-mono-one border-[1px] border-solid border-gray-100 mq825:min-w-full min-h-[800px]
      mq825:min-h-[600px] mq450:min-h-[400px]">
        <div className="h-[4000px] w-[4000px] absolute top-[-1797px] left-[-1723px] z-[1]">
          <img
            className="absolute top-[calc(50%_-_2000px)] left-[calc(50%_-_2000px)] w-full h-full object-cover"
            alt=""
            src="/textura-3-1@2x.png"
          />
          <div className="absolute top-[calc(50%_-_315px)] left-[calc(50%_-_454px)] bg-black1 w-[1024px] h-[1024px] opacity-[0.2] z-[1]" />
        </div>
        <div className="w-[962px] absolute bottom-[-120px] left-[calc(50%_-_481px)] tracking-[-0.13em] leading-[420px] inline-block [-webkit-text-stroke:1px_#fff] opacity-[0.4] z-[2] mq450:text-86xl mq450:leading-[168px] mq825:text-149xl mq825:leading-[252px]">
          888
        </div>
        <img
          className="h-[631px] w-[732.1px] absolute top-[84.1px] left-[-31.1px] object-contain z-[3] mq450:h-[300px] mq450:w-[350px] mq825:h-[400px] mq825:w-[500px]"
          loading="lazy"
          alt=""
          src="/mask1@2x.png"
        />
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
