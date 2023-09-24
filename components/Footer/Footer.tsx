import Image from "next/image";
import logo from "../../public/footer.png";
import iconTw from "../../public/icon-tw.png";
import iconIn from "../../public/icon-in.png";
import iconFb from "../../public/icon-fb.png";
import iconG from "../../public/icon-g.png";
const Footer = () => {
  return (
    <div className="footer">
      <Image src={logo} alt="" className="footer__logo" />
      <div className="footer__icons">
        <a href="">
          <Image src={iconTw} alt="" className="footer__icon" />
        </a>
        <a href="">
          <Image src={iconIn} alt="" className="footer__icon" />
        </a>
        <a href="">
          <Image src={iconFb} alt="" className="footer__icon" />
        </a>
        <a href="">
          <Image src={iconG} alt="" className="footer__icon" />
        </a>
      </div>
      <p className="footer__copyright">
        © 2023 Lemonhive. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
