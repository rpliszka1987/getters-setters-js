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
