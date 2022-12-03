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
