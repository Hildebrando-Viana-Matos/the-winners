import { BoxCategories } from "../BoxCategories";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles.scss";

export function Categories() {
  const breakPoints = {
    200: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
    1600: { items: 4 },
    1700: { items: 5 },
  };

  return (
    <section className="categories" id="categories">
      <div className="container">
        <h1>Categorias</h1>

        <h2>Categoria 1</h2>
      </div>

      <OwlCarousel
        className="owl-theme"
        items={5}
        loop
        margin={5}
        stagePadding={50}
        responsive={breakPoints}
      >
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
      </OwlCarousel>

      <div className="container">
        <h2>Categoria 2</h2>
      </div>

      <OwlCarousel
        className="owl-theme"
        items={5}
        loop
        margin={5}
        stagePadding={50}
        responsive={breakPoints}
      >
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
      </OwlCarousel>

      <div className="container">
        <h2>Categoria 3</h2>
      </div>

      <OwlCarousel
        className="owl-theme"
        items={5}
        loop
        margin={5}
        stagePadding={50}
        responsive={breakPoints}
      >
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink="https://github.com/Hildebrando-Viana-Matos.png"
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
      </OwlCarousel>
    </section>
  );
}
