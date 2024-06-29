import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Swap = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center relative overflow-hidden pt-0 px-4 pb-[120px] Wbox-border max-w-full text-left font-space-grotesk lg:pb-[78px] mq825:pb-[51px] ${className} bg-[url('/swap-section-bg-min.png')] bg-cover`}
    >
      <div className="flex mq825:flex-col-reverse lg:flex-row z-[2]">
        <div className="h-auto w-full overflow-hidden flex flex-col items-center justify-start relative max-w-full lg:h-auto">
          <h1 className="text-[#14f195]">Comming soon</h1>
          <div className="w-full flex flex-col items-center justify-start py-0 px-4 lg:px-16 xl:px-32 gap-4 opacity-100 z-1">
            <div className="w-full overflow-x-auto flex flex-row items-center justify-center py-0 px-4 lg:px-[83px] xl:px-[167px] gap-[20px]">
              {/* Aquí se puede añadir contenido si es necesario */}
            </div>

            <div className="blur-sm relative flex flex-row items-center justify-center relative gap-4 py-6 px-6 rounded-21xl bg-dark-grey border border-gray-600 border-solid">
              <div className="rounded-21xl flex flex-col items-start justify-start w-[311px] box-border gap-[20px] text-base text-white">
                <div className="self-stretch flex flex-col items-start justify-start relative gap-[20px]">
                  <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-[20px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                      <div className="relative leading-[16px] font-medium inline-block min-w-[37px]">
                        from
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-5 gap-[20px] text-21xl text-white flex-wrap">
                      <div className="flex flex-row items-center justify-start">
                        <b className="relative leading-[44px] inline-block [-webkit-text-stroke:1px_#fff] text-[2rem] md:text-[3rem] lg:text-[4rem]">
                          0
                        </b>
                      </div>
                      <div className="rounded-25xl bg-dark-grey flex flex-row items-center justify-end py-0.5 px-[3px] text-base text-green border-[1px] border-solid border-green">
                        <div className="flex flex-row items-center justify-end">
                          <img
                            className="h-9 w-9 relative"
                            loading="lazy"
                            alt=""
                            src="/protocol-icon1.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-center py-2.5 px-4">
                          <div className="relative leading-[16px] inline-block min-w-[30px]">
                            SOL
                          </div>
                        </div>
                        <div className="h-9 w-9 rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 box-border">
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/keyboard-arrow-down1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-[20px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                      <div className="relative leading-[16px] font-medium inline-block min-w-[17px]">
                        to
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-5 gap-[20px] text-21xl text-white flex-wrap">
                      <div className="flex flex-row items-center justify-start">
                        <b className="relative leading-[44px] inline-block [-webkit-text-stroke:1px_#fff] text-[2rem] md:text-[3rem] lg:text-[4rem]">
                          0
                        </b>
                      </div>
                      <Button
                        className="h-11 w-[130px]"
                        startIcon={
                          <img width="32px" height="25.8px" src="/mask-1.svg" />
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
                          width: 130,
                          height: 44,
                        }}
                      >
                        WAZAAA
                      </Button>
                    </div>
                  </div>
                  <div className="w-9 h-9 !m-[0] absolute top-[calc(50%_-_22px)] left-[calc(50%_-_21.5px)] rounded-17xl bg-green box-border flex flex-row items-center justify-center py-1.5 px-0.5 z-[1] border-[4px] border-solid border-black">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/autorenew.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start p-5 gap-[20px]">
                  <div className="flex flex-row items-center justify-start gap-[10px] text-xl flex-wrap">
                    <div className="flex flex-row items-end justify-start gap-[4px]">
                      <b className="relative leading-[20px] inline-block min-w-[51px] text-base">
                        2,194
                      </b>
                      <div className="relative leading-[20px] font-light inline-block min-w-[37px] text-base">
                        SOL
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/drag-handle.svg"
                    />
                    <div className="flex flex-row items-end justify-start gap-[4px]">
                      <b className="relative leading-[20px] inline-block min-w-[65px] text-base">
                        12,466
                      </b>
                      <div className="relative leading-[20px] font-light inline-block min-w-[66px] text-base">
                        WAZAA
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] flex-wrap">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative leading-[20px]">
                        Minimun Received
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end gap-[8px]">
                      <b className="relative leading-[16px] inline-block min-w-[18px]">
                        10
                      </b>
                      <div className="relative leading-[16px] inline-block min-w-[54px]">
                        WAZAA
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative leading-[20px] inline-block min-w-[97px]">
                        Price Impact
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end gap-[8px]">
                      <b className="relative leading-[16px] inline-block min-w-[7px]">
                        -
                      </b>
                      <div className="self-stretch w-2 relative leading-[16px] hidden">
                        -
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="self-stretch h-11"
                  endIcon={
                    <img width="24px" height="24px" src="/autorenew.svg" />
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
                >
                  Swap
                </Button>
              </div>
              <div className="w-full h-full rounded-21xl absolute bg-black opacity-70 top-[0px] left-[0px]"></div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border flex-wrap">
              <div className="self-stretch flex flex-row items-start justify-start relative">
                {/* Aquí puedes añadir contenido adicional si es necesario */}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border max-w-full mq825:pt-10 mq825:pb-5 mq600:px-[70px]">
          <div className="max-w-[700px]">
            <div className="flex flex-col items-start justify-start max-w-full">
              <b className="relative leading-[24px] inline-block max-w-full text-left text-xl text-gray-400 font-space-grotesk mq450:text-base mq450:leading-[19px]">
                swap
              </b>
              <h1 className="m-0 self-stretch relative text-61xl leading-[80px] text-green font-inherit mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
                <span className="font-light">{`buy `}</span>
                <b>{`wazaaa `}</b>
              </h1>
            </div>
            <div className="text-white">
              <p>
              Buy WAZAAA directly in our private sale, contributing to create an a great ecosystem while your tokens are getting value. This liquidity will be contribute to inittialize our first liquidity pool on raydium.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[-100px] left-[-140px] tracking-[-0.13em] leading-[420px] inline-block text-[transparent] font-rubik-mono-one [-webkit-text-stroke:1px_#fff] opacity-[0.4] z-[1] text-401xl mq450:text-86xl mq450:leading-[168px] mq825:text-149xl mq825:leading-[252px]">
        <span>888 888 888</span>
      </div>
      <div className="absolute top-[220px] left-[0] tracking-[-0.13em] leading-[420px] inline-block text-[transparent] font-rubik-mono-one [-webkit-text-stroke:1px_#fff] opacity-[0.4] z-[1] text-401xl mq450:text-86xl mq450:leading-[168px] mq825:text-149xl mq825:leading-[252px]">
        888 888 888
      </div> */}
    </section>
  );
};

Swap.propTypes = {
  className: PropTypes.string,
};

export default Swap;
