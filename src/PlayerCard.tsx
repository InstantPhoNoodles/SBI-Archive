import "./PlayerCard.css";
import { useState } from "react";

type PlayerCardProps = {
  name: string;
  image: string;
  rings?: string;
  border?: boolean;
  borderColor?: string;
  info?: string;
};

export default function PlayerCard({ name, image, rings, border, borderColor, info }: PlayerCardProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div 
      className={`player-card ${border ? "with-border" : ""}`}
      style={{ borderColor: borderColor }}
    >
      <div className="player-image-container" onClick={() => setShowInfo(!showInfo)}>
        <img src={image} alt={name} className="player-image"/>
        {showInfo && <div className="player-info-overlay">{info}</div>}
      </div>
      <h3>{name}</h3>
      <h3>{rings}</h3>
    </div>
  );
}
