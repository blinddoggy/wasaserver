import { useState } from "react";
import ToggleHeader from "./toggle-header";
import PropTypes from "prop-types";

const Tokenomics = ({ className = "" }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center px-10 py-[120px] box-border max-w-full text-left text-xl text-gray-400 font-space-grotesk lg:pb-[78px] lg:box-border mq450:pb-[51px] mq450:box-border mq450:p-4 mq825:p-4 ${className}`}
    >
      <div className="relative flex-1 rounded-21xl bg-black1 box-border overflow-hidden flex flex-row items-start justify-center py-[117px] px-[115px] max-w-full border-[1px] border-solid border-gray-100 mq450:py-[49px] mq450:px-5 mq450:box-border mq825:py-[76px] mq825:px-[57px] mq825:box-border">
        <div className="relative w-[555px] flex flex-col items-start justify-start gap-[40px] max-w-full z-[1] mq825:gap-[20px]">
          <div className="w-[510px] flex flex-col items-start justify-start max-w-full">
            <b className="self-stretch relative leading-[24px] mq450:text-base mq450:leading-[19px]">
              tokenomics
            </b>
            <h1 className="m-0 relative text-61xl leading-[80px] font-light font-inherit text-purple inline-block max-w-full mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
              allocation
              <br></br>
              breakdown
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center max-w-full text-13xl text-purple">
            <div className="self-stretch box-border flex flex-row py-3 items-center justify-start max-w-full border-b-[1px] border-solid border-purple gap-[20px]">
              <span className="min-w-[105px]">10%</span> <span>Private Presale: 88,888,888 WAZAAA</span>
              {/* <ToggleHeader
                prop="60%"
                liquidity="Liquidity"
                remove={openSection === "liquidity" ? "/remove.svg" : "/add1.svg"}
                onClick={() => toggleSection("liquidity")}
              />
              {openSection === "liquidity" && (
                <div className="self-stretch flex flex-row items-center justify-start py-5 px-[22px] box-border max-w-full text-base text-white font-archivo">
                  <div className="flex-1 relative tracking-[0.02em] leading-[26px] font-light inline-block max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse bibendum tincidunt volutpat. Pellentesque mattis
                    turpis neque, non lacinia ligula blandit faucibus.
                  </div>
                </div>
              )} */}
            </div>
            <div className="self-stretch box-border flex flex-row py-3 items-center justify-start max-w-full border-b-[1px] border-solid border-purple gap-[20px]">
              <span className="min-w-[105px]">10%</span> <span>ICO: 88,888,888 WAZAAA</span>
              {/* <ToggleHeader
                prop="15%"
                liquidity="Marketing"
                remove={openSection === "marketing" ? "/remove.svg" : "/add1.svg"}
                onClick={() => toggleSection("marketing")}
              />
              {openSection === "marketing" && (
                <div className="self-stretch flex flex-row items-center justify-start py-5 px-[22px] box-border max-w-full text-base text-white font-archivo">
                  <div className="flex-1 relative tracking-[0.02em] leading-[26px] font-light inline-block max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse bibendum tincidunt volutpat. Pellentesque mattis
                    turpis neque, non lacinia ligula blandit faucibus.
                  </div>
                </div>
              )} */}
            </div>
            <div className="self-stretch box-border flex flex-row py-3 items-center justify-start max-w-full border-b-[1px] border-solid border-purple gap-[20px]">
              <span className="min-w-[105px]">10%</span> <span>ICO ROUND 2 : 88,888,888 WAZAAA</span>
              {/* <ToggleHeader
                prop="10%"
                liquidity="Ecosystem"
                remove={openSection === "ecosystem" ? "/remove.svg" : "/add1.svg"}
                onClick={() => toggleSection("ecosystem")}
              />
              {openSection === "ecosystem" && (
                <div className="self-stretch flex flex-row items-center justify-start py-5 px-[22px] box-border max-w-full text-base text-white font-archivo">
                  <div className="flex-1 relative tracking-[0.02em] leading-[26px] font-light inline-block max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse bibendum tincidunt volutpat. Pellentesque mattis
                    turpis neque, non lacinia ligula blandit faucibus.
                  </div>
                </div>
              )} */}
            </div>
            <div className="self-stretch box-border flex flex-row py-3 items-center justify-start max-w-full border-b-[1px] border-solid border-purple gap-[20px]">
              <span className="min-w-[105px]">10%</span> <span>Team Allocation: 88,888,888 WAZAAA</span>
              {/* <ToggleHeader
                prop="10%"
                liquidity="Team"
                remove={openSection === "team" ? "/remove.svg" : "/add1.svg"}
                onClick={() => toggleSection("team")}
              />
              {openSection === "team" && (
                <div className="self-stretch flex flex-row items-center justify-start py-5 px-[22px] box-border max-w-full text-base text-white font-archivo">
                  <div className="flex-1 relative tracking-[0.02em] leading-[26px] font-light inline-block max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse bibendum tincidunt volutpat. Pellentesque mattis
                    turpis neque, non lacinia ligula blandit faucibus.
                  </div>
                </div>
              )} */}
            </div>
            <div className="self-stretch box-border flex flex-row py-3 items-center justify-start max-w-full border-b-[1px] border-solid border-purple gap-[20px]">
              <span className="min-w-[105px]">10%</span> <span>Marketing: 88,888,888 WAZAAA</span>
              {/* <ToggleHeader
                prop="5%"
                liquidity="Advisory"
                remove={openSection === "advisory" ? "/remove.svg" : "/add1.svg"}
                onClick={() => toggleSection("advisory")}
              />
              {openSection === "advisory" && (
                <div className="self-stretch flex flex-row items-center justify-start py-5 px-[22px] box-border max-w-full text-base text-white font-archivo">
                  <div className="flex-1 relative tracking-[0.02em] leading-[26px] font-light inline-block max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse bibendum tincidunt volutpat. Pellentesque mattis
                    turpis neque, non lacinia ligula blandit faucibus.
                  </div>
                </div>
              )} */}
            </div>
            <div className="self-stretch box-border flex flex-row py-3 items-center justify-start max-w-full border-b-[1px] border-solid border-purple gap-[20px]">
              <span className="min-w-[105px]">12,25%</span> <span>Enlisting & Liquidity: 108,888,888 WAZAAA</span>
            </div>
            <div className="self-stretch box-border flex flex-row py-3 items-center justify-start max-w-full border-b-[1px] border-solid border-purple gap-[20px]">
              <span className="min-w-[105px]">37,75%</span> <span>VESTING Tokens: 335,555,560 WAZAAA</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-start justify-center z-0">
          <img
            className="absolute h-full w-full object-cover"
            alt=""
            src="/background-1@2x.png"
          />
          <img
            className="absolute top-0 left-0 h-full w-full object-contain mq1425:hidden"
            loading="lazy"
            alt=""
            src="/graph@2x.png"
            style={{ left: '0', transform: 'translateX(-42%)' }}
          />
        </div>
      </div>
    </section>
  );
};

Tokenomics.propTypes = {
  className: PropTypes.string,
};

export default Tokenomics;
