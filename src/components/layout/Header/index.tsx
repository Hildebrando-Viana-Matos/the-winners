// Icons
import { SiInstagram, SiTiktok, SiDiscord, SiTwitter } from "react-icons/si";

// React
import { useState, useRef } from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

// Icon
import { FiMenu, FiX } from "react-icons/fi";

var OpenSea = require("../../../assets/icons/opensea.png");

export function Header() {
  const header = useRef(null);
  const propose = useRef(null);
  const howItWorks = useRef(null);
  const whatWeDo = useRef(null);
  const categories = useRef(null);
  const history = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  function handleMenuIsOpen() {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
  }

  return (
    <header id="header">
      <div className="container">
        <div className="logo"></div>
        <div className="socials">
          <a href="" className="boxSocials">
            <SiInstagram />
          </a>
          <a href="" className="boxSocials">
            <SiTiktok />
          </a>
          <a href="" className="boxSocials">
            <SiDiscord />
          </a>
          <a href="" className="boxSocials">
            <SiTwitter />
          </a>
          <a href="" className="boxSocials">
            <img src={OpenSea} alt="OpenSea Icon" />
          </a>
        </div>
        <button
          className={`menuButton ${menuIsOpen ? "active" : ""}`}
          onClick={handleMenuIsOpen}
        >
          {menuIsOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div className="container">
        <nav className="desktop">
          <ul>
            <li onClick={handleMenuIsOpen}>
              <Link onClick={() => scrollToSection(header)} to={"/"}>
                Início
              </Link>
            </li>
            <li onClick={handleMenuIsOpen}>
              <Link onClick={() => scrollToSection(propose)} to={"/#propose"}>
                Propósito
              </Link>
            </li>
            <li onClick={handleMenuIsOpen}>
              <Link
                onClick={() => scrollToSection(howItWorks)}
                to={"/#howItWorks"}
              >
                Como funciona?
              </Link>
            </li>
            <li onClick={handleMenuIsOpen}>
              <Link onClick={() => scrollToSection(whatWeDo)} to={"/#whatWeDo"}>
                O que fazemos?
              </Link>
            </li>
            <li onClick={handleMenuIsOpen}>
              <Link
                onClick={() => scrollToSection(categories)}
                to={"/#categories"}
              >
                Categoria
              </Link>
            </li>
            <li onClick={handleMenuIsOpen}>
              <Link onClick={() => scrollToSection(history)} to={"/#history"}>
                História
              </Link>
            </li>
            <li onClick={handleMenuIsOpen}>
              <Link to={"/events"}>Eventos</Link>
            </li>
            <li onClick={handleMenuIsOpen}>
              <Link to={"/transparency"}>Transparência</Link>
            </li>
          </ul>
        </nav>
        {menuIsOpen && (
          <nav className={`mobile ${menuIsOpen ? "isMenu" : ""}`}>
            <ul>
              <li onClick={handleMenuIsOpen}>
                <Link onClick={() => scrollToSection(header)} to={"/"}>
                  Início
                </Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link onClick={() => scrollToSection(propose)} to={"/#propose"}>
                  Propósito
                </Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link
                  onClick={() => scrollToSection(howItWorks)}
                  to={"/#howItWorks"}
                >
                  Como funciona?
                </Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link
                  onClick={() => scrollToSection(whatWeDo)}
                  to={"/#whatWeDo"}
                >
                  O que fazemos?
                </Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link
                  onClick={() => scrollToSection(categories)}
                  to={"/#categories"}
                >
                  Categoria
                </Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link onClick={() => scrollToSection(history)} to={"/#history"}>
                  História
                </Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link to={"/events"}>Eventos</Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link to={"/transparency"}>Transparência</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <div className="container">
        <div className="line"></div>
      </div>
    </header>
  );
}
