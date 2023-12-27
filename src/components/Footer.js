import { INSTA_LOGO } from "../utils/constant";
import { FB_LOGO } from "../utils/constant";
import { LINKEDIN_LOGO } from "../utils/constant";
import { TW_LOGO } from "../utils/constant";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={INSTA_LOGO} alt="instagram logo" />
        <img src={TW_LOGO} alt="twitter logo" />
        <img src={FB_LOGO} alt="facebook logo" />
        <img src={LINKEDIN_LOGO} alt="linkedin logo" />
      </div>
      <div className="footer-nav">
        <h4>Home</h4>
        <h4>Service</h4>
        <h4>Terms</h4>
        <h4>Privacy Policy</h4>
      </div>
      <p className="footer-copyrights">
        &copy; 2023 Food delivery. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
