// Components
import { OurTeam } from "../components/layout/OurTeam";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Doubts } from "../components/Doubts";

// Styles
import "../styles/pages/home.scss";
import { FiHeart } from "react-icons/fi";

// Images
let NFT = require("../assets/nft.png");

export function Home() {
  return (
    <main>
      <section className="presentation">
        <div className="container">
          <div className="descriptionPresentation">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              ipsum aperiam, incidunt fuga eveniet autem suscipit id odit animi
              omnis enim. Laboriosam deleniti obcaecati voluptate fuga ut, cum
              omnis adipisci.
            </p>
            <Button text="Ajude pessoas com o coração" />
          </div>
          <div className="imgPresentation"></div>
        </div>
      </section>

      <section className="propose" id="propose">
        <div className="container">
          <div className="imgPropose"></div>
          <div className="descriptionPropose">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              ipsum aperiam, incidunt fuga eveniet autem suscipit id odit animi
              omnis enim. Laboriosam deleniti obcaecati voluptate fuga ut, cum
              omnis adipisci. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Obcaecati ipsum aperiam, incidunt fuga eveniet autem
              suscipit id odit animi omnis enim. Laboriosam deleniti obcaecati
              voluptate fuga ut, cum omnis adipisci.
            </p>
            <Button text="Conheça nossa história" />
          </div>
        </div>
      </section>

      <section className="nogs">
        <div className="container">
          <div className="title">
            <h1>ONG’s que ajudamos</h1>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
          </div>

          <div className="nogsContent">
            <div className="logoNogs"></div>
            <div className="logoNogs"></div>
            <div className="logoNogs"></div>
            <div className="logoNogs"></div>
          </div>
        </div>
      </section>

      <section className="howItWorks" id="howItWorks">
        <div className="container">
          <div className="boxHowItWorks boxTitle">
            <h1 className="titleHowItWorks">Como Funciona?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto excepturi
            </p>
          </div>
          <div className="boxHowItWorks">
            <img src="https://github.com/Hildebrando-Viana-Matos.png" alt="" />
            <h1>Arrecadação</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto excepturi
            </p>
          </div>
          <div className="boxHowItWorks">
            <img src="https://github.com/Hildebrando-Viana-Matos.png" alt="" />
            <h1>Divisão</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto excepturi
            </p>
          </div>
          <div className="boxHowItWorks">
            <img src="https://github.com/Hildebrando-Viana-Matos.png" alt="" />
            <h1>Doação</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto excepturi
            </p>
          </div>
        </div>
      </section>

      <section className="doubts">
        <div className="container">
          <h1>Dúvidas</h1>
          <div className="content">
            <Doubts
              question="O que é uma NFT?"
              answer=" 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi doloremque omnis ratione, possimus ullam ea quibusdam molestiae excepturi asperiores, alias, tenetur ab. Earum voluptatibus rem excepturi ipsa ad quam."
            />
            <Doubts
              question="O que é BlockChain?"
              answer=" 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi doloremque omnis ratione, possimus ullam ea quibusdam molestiae excepturi asperiores, alias, tenetur ab. Earum voluptatibus rem excepturi ipsa ad quam."
            />
            <Doubts
              question="O que é a OpenSea"
              answer=" 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi doloremque omnis ratione, possimus ullam ea quibusdam molestiae excepturi asperiores, alias, tenetur ab. Earum voluptatibus rem excepturi ipsa ad quam."
            />
          </div>
        </div>
      </section>

      <Categories />

      <section className="whatWeDo" id="whatWeDo">
        <div className="title">
          <h1>O que fazemos?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div className="container">
          <div className="nftImg">
            <img src={NFT} alt="NFT" />
          </div>
          <div className="boxsInformation">
            <div className="boxInformation one">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation two">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation three">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation four">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation five">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation six">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="history" id="history">
        <div className="descHistory">
          <h1>História</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sed, amet molestias eaque voluptatibus, quos similique tempora autem
            accusamus aliquid possimus dolorem. Quam magnam ullam ea aperiam
            quas blanditiis sapiente?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sed, amet molestias eaque voluptatibus, quos similique tempora autem
            accusamus aliquid possimus dolorem. Quam magnam ullam ea aperiam
            quas blanditiis sapiente?
          </p>
        </div>
        <div className="imgHistory"></div>
      </section>

      <OurTeam />
    </main>
  );
}
