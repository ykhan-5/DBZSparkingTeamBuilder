import React from "react";

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Battle Points: {character.battlePoints}</p>
    </div>
  );
}

export default CharacterCard;
