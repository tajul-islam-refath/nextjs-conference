import Image from "next/image";
import LogoOne from "../../public/sponsor-logo-1.png";
import LogoTwo from "../../public/sponsor-logo-2.png";
import LogoThree from "../../public/sponsor-logo-3.png";

import MobileLogoOne from "../../public/msplogo-1.png";
import MobileLogoTwo from "../../public/msplogo-2.png";
import MobileLogoThree from "../../public/msplogo-3.png";

const OurSponsor = () => {
  return (
    <div className="sponsor">
      <h2 className="sponsor__title">Our Sponsor</h2>
      <div className="sponsor__group">
        <p className="sponsor__subtitle">🥇 Gold Sponsor</p>
        <Image src={LogoOne} alt="" className="sponsor__logo" />
        <Image src={MobileLogoOne} alt="" className="sponsor__mlogo" />
      </div>
      <div className="sponsor__group">
        <p className="sponsor__subtitle">🥈Silver Sponsors</p>
        <Image src={LogoTwo} alt="" className="sponsor__logo" />
        <Image src={MobileLogoTwo} alt="" className="sponsor__mlogo" />
      </div>
      <div className="sponsor__group">
        <p className="sponsor__subtitle">🥉Bronze Sponsors</p>
        <Image src={LogoThree} alt="" className="sponsor__logo" />
        <Image src={MobileLogoThree} alt="" className="sponsor__mlogo" />
      </div>
    </div>
  );
};

export default OurSponsor;
