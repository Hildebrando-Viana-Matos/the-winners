// React
import { useState } from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Icons
import { SiInstagram, SiTiktok, SiDiscord } from "react-icons/si";
// import OpenSea from "../../../assets/icons/opensea.svg";

// Styles
import "./styles.scss";

// Icon
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  function handleMenuIsOpen() {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
  }

  return (
    <header>
      <div className="container">
        <div className="logo"></div>
        <span>“O sentido da vida é ajudar o próximo.”</span>
        <div className="socials">
          <div className="boxSocials">
            <SiInstagram />
          </div>
          <div className="boxSocials">
            <SiTiktok />
          </div>
          <div className="boxSocials">
            <SiDiscord />
          </div>
          {/* <div className="boxSocials">
            <img src={OpenSea} alt="OpenSea Icon" />
          </div> */}
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
            <li>
              <Link to={"/"}>Início</Link>
            </li>
            <li>
              <Link to={"/#propose"}>Propósito</Link>
            </li>
            <li>
              <Link to={"/#howItWorks"}>Como funciona?</Link>
            </li>
            <li>
              <Link to={"/#whatWeDo"}>O que fazemos?</Link>
            </li>
            <li>
              <Link to={"/#categories"}>Categoria</Link>
            </li>
            <li>
              <Link to={"/#history"}>História</Link>
            </li>
            <li>
              <Link to={"/events"}>Eventos</Link>
            </li>
            <li>
              <Link to={"/transparency"}>Transparência</Link>
            </li>
          </ul>
        </nav>
        {menuIsOpen && (
          <nav className={`mobile ${menuIsOpen ? "isMenu" : ""}`}>
            <ul>
              <li onClick={handleMenuIsOpen}>
                <Link to={"/"}>Início</Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link to={"/#propose"}>Propósito</Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link to={"/#howItWorks"}>Como funciona?</Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link to={"/#whatWeDo"}>O que fazemos?</Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link to={"/#categories"}>Categoria</Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link to={"/#history"}>História</Link>
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
