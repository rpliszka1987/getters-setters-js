// This is a Team Stats challenge from Code Academy Solution. Description in README.md file.

const team = {
  _players: [
    {
      firstName: "Robert",
      lastName: "Pliszka",
      age: 35,
    },
    {
      firstName: "Lebron",
      lastName: "James",
      age: 37,
    },
    {
      firstName: "Christiano",
      lastName: "Ronaldo",
      age: 34,
    },
  ],
  _games: [
    {
      opponent: "Poland",
      teamPoints: 5,
      opponentPoints: 6,
    },
    {
      opponent: "Dubai",
      teamPoints: 3,
      opponentPoints: 1,
    },
    {
      opponent: "USA",
      teamPoints: 4,
      opponentPoints: 1,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    this.players.push({
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    });
  },
  addGame(newOpponents, newTeamPoints, newOpponentPoints) {
    this._games.push({
      opponent: newOpponents,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    });
  },
};

team.addPlayer("Johnny", "Walker", 54)
team.addGame("Dominican Republic", 5, 3)

console.log(team.players)
console.log(team.games)