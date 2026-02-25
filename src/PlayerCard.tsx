import "./PlayerCard.css";

type PlayerCardProps = {
  name: string;
  image: string;
};

export default function PlayerCard({ name, image }: PlayerCardProps) {
  return (
    <div className="player-card">
      <img src={image} alt={name} className="player-image"/>
      <h3>{name}</h3>
    </div>
  );
}
