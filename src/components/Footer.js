import { INSTA_LOGO } from "../utils/constant";
import { FB_LOGO } from "../utils/constant";
import { LINKEDIN_LOGO } from "../utils/constant";
import { TW_LOGO } from "../utils/constant";

const Footer = () => {
  return (
    <div className="border-solid border-black text-center border-t">
      <div className="flex justify-center items-center my-5">
        <img
          className="w-[40px] h-[40px] mr-5"
          src={INSTA_LOGO}
          alt="instagram logo"
        />
        <img
          className="w-[40px] h-[40px] mr-4"
          src={TW_LOGO}
          alt="twitter logo"
        />
        <img
          className="w-[50px] h-[50px] mr-3"
          src={FB_LOGO}
          alt="facebook logo"
        />
        <img
          className="w-[55px] h-[45px]"
          src={LINKEDIN_LOGO}
          alt="linkedin logo"
        />
      </div>
      <div className="flex justify-center items-center">
        <h3 className="text-lg mr-5 font-bold text-slate-600">Home</h3>
        <h3 className="text-lg mr-5 font-bold text-slate-600">Service</h3>
        <h3 className="text-lg mr-5 font-bold text-slate-600">Terms</h3>
        <h3 className="text-lg mr-5 font-bold text-slate-600">
          Privacy Policy
        </h3>
      </div>
      <p className="text-slate-400 pr-[40px]">
        &copy; 2023 Food delivery. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
