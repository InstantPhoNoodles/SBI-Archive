import "./PlayerCard.css";

type PlayerCardProps = {
  name: string;
  image: string;
  rings?: string;
  border?: boolean;
  borderColor?: string;
};

export default function PlayerCard({ name, image, rings, border, borderColor }: PlayerCardProps) {
  return (
    <div 
      className={`player-card ${border ? "with-border" : ""}`}
      style={{ borderColor: borderColor }}
    >
      <img src={image} alt={name} className="player-image"/>
      <h3>{name}</h3>
      <h3>{rings}</h3>
    </div>
  );
}
