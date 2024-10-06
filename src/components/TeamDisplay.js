import React from "react";
import CharacterCard from "./CharacterCard";

function TeamDisplay({ team }) {
  return (
    <div className="team-display">
      {team.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default TeamDisplay;
