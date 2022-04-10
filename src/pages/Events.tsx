// Styles
import "../styles/pages/events.scss";

// Image
let NFT = require("../assets/nft.png");

export function Events() {
  return (
    <main>
      <div className="title">
        <h1>Eventos</h1>
      </div>

      <section className="text">
        <div className="container">
          <h1>Espera um pouquinho...</h1>
          <h1>Daqui a pouco vem</h1>
          <h1>👉👈🥺</h1>
        </div>

        <img className="gifNFT" src={NFT} alt="Gif NFT" />
      </section>
    </main>
  );
}
