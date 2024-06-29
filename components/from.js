import { Button } from "@mui/material";
import PropTypes from "prop-types";

const From = ({ className = "", from, inputPlaceholder, buttonDropdown }) => {
  return (
    <div
      className={`self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-[20px] text-left text-base text-white font-space-grotesk ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
        <div className="relative leading-[16px] font-medium inline-block min-w-[37px]">
          {from}
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-5 gap-[20px] text-21xl text-[transparent] mq825:flex-wrap">
        <div className="flex flex-row items-center justify-start">
          <b className="relative leading-[44px] inline-block [-webkit-text-stroke:1px_#fff] min-w-[102px] mq450:text-5xl mq450:leading-[26px] mq825:text-13xl mq825:leading-[35px]">
            {inputPlaceholder}
          </b>
        </div>
        <Button
          className="h-11 w-[142px]"
          startIcon={
            <img width="36px" height="36px" src="/protocol-icon.svg" />
          }
          endIcon={
            <img width="24px" height="24px" src="/keyboard-arrow-down.svg" />
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
            width: 142,
            height: 44,
          }}
        >
          {buttonDropdown}
        </Button>
      </div>
    </div>
  );
};

From.propTypes = {
  className: PropTypes.string,
  from: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  buttonDropdown: PropTypes.string,
};

export default From;
