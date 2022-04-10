// Icons
import { SiInstagram, SiTiktok, SiDiscord } from "react-icons/si";
// import OpenSea from "../../../assets/icons/opensea.svg";

// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

export function Footer() {
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
