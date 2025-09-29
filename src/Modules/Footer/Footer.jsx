import { memo } from 'react';
import footerLogo from "../../assets/images/footerLogo.png"

const Footer = () => {
  return (
    <div>
      <div className='container max-w-7xl mx-auto rounded-2xl bg-[#15203D]'>
            <img src={footerLogo} alt="" />
            <h2>Empowering innovation with cutting edge technology solutions</h2>
            <h3>Connect With Us</h3>
      </div>
    </div>
  );
};

export default memo(Footer);