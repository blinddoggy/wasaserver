import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch rounded-t-21xl rounded-b-none overflow-hidden flex flex-col items-start justify-start relative max-w-full text-left text-221xl text-[transparent] font-space-grotesk ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] flex items-center justify-center z-[0]">
        <img
          className="w-full h-full object-cover absolute"
          alt=""
          src="/background-7@2x.png"
        />
      </div>
      <div className="grid grid-cols-2 rounded-t-21xl rounded-b-none bg-gray-200 box-border pt-[118px] px-10 pb-[246px] relative gap-[0.8px] w-full z-[1] border-t-[1px] border-solid border-gray-100
        mq825:grid-cols-1 mq825:pt-[77px] mq825:pb-40 mq825:box-border">
        <div className="flex flex-col justify-start w-full max-w-500px mb-6">
          <b className="w-[439px] relative text-xl leading-[24px] inline-block text-gray-400 max-w-full mq450:text-base mq450:leading-[19px]">
            contact
          </b>
          <h1 className="m-0 w-[439px] relative leading-[80px] font-light font-inherit inline-block shrink-0 max-w-full text-61xl text-green mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
            contact us
          </h1>
          <div className="w-[386px] flex flex-row items-start justify-start pt-6 box-border max-w-full text-base text-white font-archivo">
            <div className="flex-1 relative tracking-[0.02em] leading-[25.6px] inline-block max-w-full z-[1]">
              <span className="font-light">{`Wazaaa!! Feel free to contact us if you have any questions or suggestions. Send your messages to `}</span>
              <span className="font-medium">info@wazaaa.ai</span>
              <span className="font-light">.</span>
            </div>
          </div>
          <div className="w-[386px] flex flex-row items-start justify-start pt-6 box-border max-w-full text-base text-white font-archivo">
            <div className="flex items-center justify-center w-[38px] h-[38px] text-white">
              <img width="24px" height="24px" src="/house_icon.svg" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <span>wazaaa innovations group</span>
              <span>30 N Gould St Ste R</span>
              <span>Sheridan, WY 82801</span>
            </div>
            
          </div>
        </div>
        
        <div className="w-full flex flex-row items-start justify-start gap-[40px] flex-wrap mq450:gap-[20px]">
              <Button
                style={{overflowWrap: 'anywhere'}}
                className="justify-between h-11 w-[282px] pr-[6px]"
                endIcon={
                  <div className="flex items-center justify-center rounded-full bg-[#14f195] w-[38px] h-[38px]">
                    <img width="24px" height="24px" src="/arrow-outward-2.svg" />
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
                  width: 282,
                  height: 44,
                }}
                onClick={() =>window.location.href = "mailto:info@wazaaa.aisubject=Contact&body=Wazaaa, Email content."}
              >
                info@wazaaa.ai
              </Button>
              <Button
                style={{overflowWrap: 'anywhere'}}
                className="justify-between h-11 w-[146px] pr-[6px]"
                endIcon={
                  <div className="flex items-center justify-center rounded-full bg-[#14f195] w-[38px] h-[38px]">
                    <img width="24px" height="24px" src="/arrow-outward-2.svg" />
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
                  width: 146,
                  height: 44,
                }}
                onClick={() =>window.open("https://t.me/wazaaaonsolana", '_blank').focus()}
              >
                Telegram
              </Button>
              <Button
              style={{overflowWrap: 'anywhere'}}
                className="justify-between h-11 w-[152px] pr-[6px]"
                endIcon={
                  <div className="flex items-center justify-center rounded-full bg-[#14f195] w-[38px] h-[38px]">
                    <img width="24px" height="24px" src="/arrow-outward-2.svg" />
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
                  width: 152,
                  height: 44,
                }}
                onClick={() => window.open("https://www.facebook.com/share/96UnxTjCQKpnSnBD/?mibextid=LQQJ4d", '_blank').focus()}
              >
                Facebook
              </Button>
              <Button
              style={{overflowWrap: 'anywhere'}}
                className="justify-between h-11 w-[87px] pr-[6px]"
                endIcon={
                  <div className="flex items-center justify-center rounded-full bg-[#14f195] w-[38px] h-[38px]">
                    <img width="24px" height="24px" src="/arrow-outward-2.svg" />
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
                  width: 152,
                  height: 44,
                }}
                onClick={() => window.open("https://x.com/wazaaasol?s=11&t=hDeJCo3CZhfoGhqjqfe5yQ", '_blank').focus()}
              >
                X
              </Button>
        </div>
        <div className="w-[200px] h-2 absolute !m-[0] bottom-[251px] left-[166.5px] bg-mediumspringgreen-200" />
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-61xl text-green mq1425:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[60.5px] px-0 pb-0 box-border max-w-full text-base lg:min-w-full mq1425:flex-1">
            
          </div>
        </div>
        <h1 className="!m-[0] absolute bottom-[0px] left-[-601.5px] text-inherit leading-[168px] font-bold font-inherit [-webkit-text-stroke:1px_#9945ff] z-[2] mq450:text-41xl mq450:leading-[67px] mq825:text-77xl mq825:leading-[101px]">
          wazaaa
        </h1>
        <h1 className="!m-[0] w-[868px] absolute right-[285.5px] bottom-[0px] text-inherit leading-[168px] font-bold font-inherit inline-block [-webkit-text-stroke:1px_#9945ff] z-[2] mq450:text-41xl mq450:leading-[67px] mq825:text-77xl mq825:leading-[101px]">
          wazaaa
        </h1>
        <h1 className="!m-[0] absolute right-[-602.5px] bottom-[0px] text-inherit leading-[168px] font-bold font-inherit [-webkit-text-stroke:1px_#9945ff] z-[2] mq450:text-41xl mq450:leading-[67px] mq825:text-77xl mq825:leading-[101px]">
          wazaaa
        </h1>
      </div>
      <footer className="self-stretch bg-black1 flex flex-row items-start justify-center pt-[18px] px-5 pb-5 z-[3] text-left text-base text-light-gray font-space-grotesk border-t-[1px] border-solid border-black">
        <div className="relative leading-[20px] font-light">
          © 2024 Wazaaa. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
