"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/React.png";

const NavBar: React.FC = () => {
  const [navShown, setNavShown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto flex flex--sb flex--aic">
        <Link href="/">
          <Image className="navbar__logo" src={logo} alt="" />
        </Link>

        <ul
          className={`navbar__list flex ${
            navShown ? "navbar__list--active" : ""
          }`}>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              About Us
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              What We Do
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Our Work
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Blog
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Say Hi
            </a>
          </li>
        </ul>
        <div
          className={`navbar__toggler ${
            navShown ? "navbar__toggler--close" : ""
          }`}
          onClick={() => setNavShown(!navShown)}></div>
      </div>
    </nav>
  );
};

export default NavBar;
