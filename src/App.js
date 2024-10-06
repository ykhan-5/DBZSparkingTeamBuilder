import React, { useState, useEffect } from "react";
import TeamDisplay from "./components/TeamDisplay";
import Filters from "./components/Filters";
import { generateTeam } from "./utils/teamGenerator";
import "./styles.css";
import charactersData from "./data/characters.json"; // Import character data

function App() {
  const [characters, setCharacters] = useState([]);
  const [team, setTeam] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    // Set characters from JSON file
    setCharacters(charactersData);
  }, []);

  const handleFilterChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const handleGenerateTeam = () => {
    const newTeam = generateTeam(characters, 15, difficulty); // Generate a team with 15 battle points
    setTeam(newTeam);
  };

  return (
    <div className="app">
      <h1>DBZ Sparking Team Builder</h1>
      <Filters onFilterChange={handleFilterChange} />
      <button onClick={handleGenerateTeam}>Generate Team</button>
      <TeamDisplay team={team} />
    </div>
  );
}

export default App;
