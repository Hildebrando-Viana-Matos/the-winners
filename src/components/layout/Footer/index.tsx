// React
import { useRef } from "react";

// Icons
import { SiInstagram, SiTiktok, SiDiscord } from "react-icons/si";
// import OpenSea from "../../../assets/icons/opensea.svg";

// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

export function Footer() {
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

  return (
    <footer>
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
      </div>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link onClick={() => scrollToSection(header)} to={"/"}>
                Início
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection(propose)} to={"/#propose"}>
                Propósito
              </Link>
            </li>
            <li>
              <Link
                onClick={() => scrollToSection(howItWorks)}
                to={"/#howItWorks"}
              >
                Como funciona?
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection(whatWeDo)} to={"/#whatWeDo"}>
                O que fazemos?
              </Link>
            </li>
            <li>
              <Link
                onClick={() => scrollToSection(categories)}
                to={"/#categories"}
              >
                Categoria
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection(history)} to={"/#history"}>
                História
              </Link>
            </li>
            <li>
              <Link to={"/events"}>Eventos</Link>
            </li>
            <li>
              <Link to={"/transparency"}>Transparência</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="line"></div>
      </div>

      <h3 className="copyright">
        © Todos os direitos reservados ao Hildebrando e TheWinners
      </h3>
    </footer>
  );
}
