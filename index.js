// Creating the robot object
const robot = {
  // These are private properties for the object. We know this cause of the underscore before the property name
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  // getter for getting information about the object
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  // setter for setting the object properties in the object
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      return "Pass in a number that is greater than or equal to 0";
    }
  },
};

// setting new value for number of sensors
robot.numOfSensors = 250;

console.log(robot.numOfSensors);

// Creating a new user object
const users = {
  // Private properties
  _firstName: "Robert",
  _lastName: "Pliszka",
  _age: 35,
  // getter which retrives all user information
  get userInfo() {
    return `User: ${this._firstName} ${this._lastName} Age: ${this._age}`;
  },
  // setter for first name
  set newUserFirstName(firstName) {
    if (typeof firstName === "string") {
      this._firstName = firstName;
    }
  },
  // settter for last name
  set newUserLastName(lastName) {
    if (typeof lastName === "string") {
      this._lastName = lastName;
    }
  },
  // setter for age
  set newUserAge(age) {
    if (typeof age === "number") {
      this._age = age;
    }
  },
};

console.log(users.userInfo);

// Assigning new values to object properties
users.newUserFirstName = "Heidi";
users.newUserLastName = "Done";
users.newUserAge = 32;

console.log(users.userInfo);
