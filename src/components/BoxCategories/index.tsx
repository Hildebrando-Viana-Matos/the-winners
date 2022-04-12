import "./styles.scss";

type BoxCategoriesProps = {
  imgLink: string;
  name: string;
  link: string;
};

export function BoxCategories({ imgLink, name, link }: BoxCategoriesProps) {
  return (
    <div className="boxCategories">
      <img src={imgLink} alt={`${name}`} />
      <h2 className="titleCategories">{name}</h2>
      <a href={link}>Comprar a NFT</a>
    </div>
  );
}
