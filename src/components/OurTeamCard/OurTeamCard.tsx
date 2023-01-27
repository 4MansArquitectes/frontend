import OurTeamCardStyled from "./OurTeamCardStyled";

interface OurTeamCardProps {
  name: string;
  tag: string;
  image: string;
}

const OurTeamCard = ({ name, tag, image }: OurTeamCardProps): JSX.Element => {
  return (
    <OurTeamCardStyled className="team">
      <img className="team__image" alt={`${tag} ${name}`} src={image} />
      <h2 className="team__name">{name}</h2>
      <span className="team__tag">{tag}</span>
    </OurTeamCardStyled>
  );
};

export default OurTeamCard;
