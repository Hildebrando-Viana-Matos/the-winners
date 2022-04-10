import { BoxTeam } from "../../BoxTeam";
import "./styles.scss";

export function OurTeam() {
  return (
    <section className="ourTeam">
      <div className="container">
        <div className="title">
          <h1>Nossa Equipe</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="contentOurTeam">
          <BoxTeam
            imgLink="https://github.com/Hildebrando-Viana-Matos.png"
            name="Hildebrando Viana Matos"
            office="Programador"
            link={{
              instagram: "https://instagram.com/hildodev",
              tiktok: "https://www.tiktok.com/@hildodev",
            }}
          />
          <BoxTeam
            imgLink="https://github.com/Hildebrando-Viana-Matos.png"
            name="Hildebrando Viana Matos"
            office="Programador"
            link={{
              instagram: "https://instagram.com/hildodev",
              tiktok: "https://www.tiktok.com/@hildodev",
            }}
          />
          <BoxTeam
            imgLink="https://github.com/Hildebrando-Viana-Matos.png"
            name="Hildebrando Viana Matos"
            office="Programador"
            link={{
              instagram: "https://instagram.com/hildodev",
              tiktok: "https://www.tiktok.com/@hildodev",
            }}
          />
          <BoxTeam
            imgLink="https://github.com/Hildebrando-Viana-Matos.png"
            name="Hildebrando Viana Matos"
            office="Programador"
            link={{
              instagram: "https://instagram.com/hildodev",
              tiktok: "https://www.tiktok.com/@hildodev",
            }}
          />
          <BoxTeam
            imgLink="https://github.com/Hildebrando-Viana-Matos.png"
            name="Hildebrando Viana Matos"
            office="Programador"
            link={{
              instagram: "https://instagram.com/hildodev",
              tiktok: "https://www.tiktok.com/@hildodev",
            }}
          />
          <BoxTeam
            imgLink="https://github.com/Hildebrando-Viana-Matos.png"
            name="Hildebrando Viana Matos"
            office="Programador"
            link={{
              instagram: "https://instagram.com/hildodev",
              tiktok: "https://www.tiktok.com/@hildodev",
            }}
          />
        </div>
      </div>
    </section>
  );
}
