import { SiInstagram, SiTiktok } from "react-icons/si";

import "./styles.scss";

type OurTeamProps = {
  imgLink: string;
  name: string;
  office: string;
  link: {
    instagram: string;
    tiktok: string;
  };
};

export function BoxTeam({ imgLink, name, office, link }: OurTeamProps) {
  return (
    <div className="boxTeam">
      <img src={imgLink} alt={`Photo ${name}`} />

      <h2>{name}</h2>
      <span>{office}</span>

      <div className="contentSocialsOurTeam">
        <a href={link.instagram}>
          <SiInstagram />
        </a>
        <a href={link.tiktok}>
          <SiTiktok />
        </a>
      </div>
    </div>
  );
}
