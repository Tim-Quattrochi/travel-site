import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import "./navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = (): void => {
    setNav(!nav);
  };

  interface NavbarClassNameParams {
    className1: string;
    className2: string;
  }

  const getNavbarClassName = ({
    className1,
    className2,
  }: NavbarClassNameParams): string => {
    return nav ? className1 : className2;
  };

  interface NavItem {
    navItem: string;
  }

  const navItems: NavItem[] = [
    { navItem: "Home" },
    { navItem: "Destinations" },
    { navItem: "Travel" },
    { navItem: "Books" },
    { navItem: "Views" },
  ];

  return (
    <div
      className={getNavbarClassName({
        className1: "navbar navbar-bg",
        className2: "navbar",
      })}
    >
      <div
        className={getNavbarClassName({
          className1: "logo dark",
          className2: "logo",
        })}
      >
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        {navItems.map((item, index) => (
          <li key={index}>{item.navItem}</li>
        ))}
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div
        className={getNavbarClassName({
          className1: "hamburger dark",
          className2: "hamburger",
        })}
        onClick={handleNav}
      >
        {!nav ? <HiOutlineMenuAlt4 /> : <AiOutlineClose />}
      </div>

      <div
        className={getNavbarClassName({
          className1: "mobile-menu active",
          className2: "mobile-menu",
        })}
      >
        <ul className="mobile-nav">
          {navItems.map((item, index) => (
            <li key={index}>{item.navItem}</li>
          ))}
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
