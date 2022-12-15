// This is a Team Stats challenge from Code Academy Solution. Description in README.md file.

// Creating a team obj
const team = {
  // players obj array
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
  //   gmaes obj array
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
  //   player getter
  get players() {
    return this._players;
  },
  //   games getter
  get games() {
    return this._games;
  },
  //   add new player method
  addPlayer(newFirstName, newLastName, newAge) {
    this.players.push({
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    });
  },
  //   add new game method
  addGame(newOpponents, newTeamPoints, newOpponentPoints) {
    this._games.push({
      opponent: newOpponents,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    });
  },
};

// creating new player
team.addPlayer("Johnny", "Walker", 54);

// creating new game
team.addGame("Dominican Republic", 5, 3);

// retriving information from team obj
console.log(team.players);
console.log(team.games);
