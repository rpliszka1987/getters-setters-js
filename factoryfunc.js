// Created a factory function
const createCharacter = (name, level) => {
  return {
    name: name,
    level: level,
    hello() {
      console.log(`${this.name} welcome back, your level is ${this.level}`);
    },
  };
};

// createing new character using factory function
const spiderman = createCharacter("Spider-Man", 100);

// Calling hello() function on the object
spiderman.hello();

// factory function that creates a new car
const createCar = (year, make, model) => {
  return {
    year: year,
    make: make,
    model: model,
    carInfo() {
      return `This is a ${this.year} ${this.make} ${this.model}. For more information contact dealer.`;
    },
  };
};

// Creates new car
const toyotaRav = createCar(2023, "Toyota", "Rav4");

// Calls carInfo() method on totoyaRav object
console.log(toyotaRav.carInfo());

// logs obj year property
console.log(toyotaRav.year);

// logs obj make property
console.log(toyotaRav.make);

// log obj model property
console.log(toyotaRav.model);

// Created a factory func using destructiong to shorten the code.
const createBday = (name, month, day) => {
  return {
    name,
    month,
    day,
    birthdayInfo() {
      return `${this.name} birthday is on ${this.month} ${this.day}.`;
    },
  };
};

// create a obj using the factory func
const robert = createBday("Robert", "February", 28);

// Calling func method
console.log(robert.birthdayInfo());

// Destructured Assignment example.
const heidi = {
  name: "Heidi",
};

const { name } = heidi;

console.log(heidi);

// Example of Built in Obj Methods

// Created robot obj
const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

// Assigns property names of the robot obj
const newRobot = Object.keys(robot);

console.log(newRobot);

// Returns obj properties with values array
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Returns new obj with 2 new porperties plus robot properties
const newerRobot = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot
);

console.log(newerRobot);
