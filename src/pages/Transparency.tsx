// Styles
import "../styles/pages/transparency.scss";

// Image
let Graphic = require("../assets/graphic.png");
let NFT = require("../assets/nft.png");
let Hand1 = require("../assets/hand1.png");
let Hand2 = require("../assets/hand2.png");

export function Transparency() {
  return (
    <>
      <main>
        <section className="information">
          <div className="container">
            <h1 className="informationTitle">Portal da Transparência</h1>
            <p>
              Instituições ajudadas: <b>4</b>
            </p>
            <p>
              Pessoas ajudadas: <b>+4000</b>
            </p>
            <p>
              Total de doações: <b>R$ 4.000,00</b>
            </p>
          </div>
        </section>

        <section className="imgNFT">
          <div className="container">
            <img src={NFT} alt="NFT" />
          </div>
        </section>

        <section className="data">
          <div className="container">
            <h1>Divisão de Custos</h1>
            <img src={Graphic} alt="Graphic" />
            <div className="colors">
              <div className="colorBox">
                <div className="box" id="information1"></div>
                <span>Informação 1</span>
              </div>
              <div className="colorBox">
                <div className="box" id="information3"></div>
                <span>Informação 2</span>
              </div>
              <div className="colorBox">
                <div className="box" id="information3"></div>
                <span>Informação 3</span>
              </div>
              <div className="colorBox">
                <div className="box" id="information4"></div>
                <span>Informação 4</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="hands">
        <img className="hand1" src={Hand1} alt="Hand One" />
        <img className="hand2" src={Hand2} alt="Hand Two" />
      </section>
    </>
  );
}
