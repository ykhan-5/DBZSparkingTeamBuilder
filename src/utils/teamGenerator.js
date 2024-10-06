export function generateTeam(characters, battlePointLimit, difficulty) {
  let filteredCharacters = characters;

  if (difficulty === "easy") {
    filteredCharacters = characters.filter(
      (character) => character.battlePoints <= 5
    );
  }
  // Apply more filters based on difficulty or other criteria

  let team = [];
  let currentPoints = 0;

  while (currentPoints < battlePointLimit && filteredCharacters.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredCharacters.length);
    const selectedCharacter = filteredCharacters[randomIndex];

    if (currentPoints + selectedCharacter.battlePoints <= battlePointLimit) {
      team.push(selectedCharacter);
      currentPoints += selectedCharacter.battlePoints;
    }
    // Remove the character so it's not selected again
    filteredCharacters.splice(randomIndex, 1);
  }

  return team;
}
