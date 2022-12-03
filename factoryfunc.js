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

spiderman.hello();


const createCar = (year, make, model) => {
    return {
        year: year,
        make: make,
        model: model,
        carInfo() {
            return(
                `This is a ${this.year} ${this.make} ${this.model}. For more information contact dealer.`
            )
        }
    }
}

const toyotaRav = createCar(2023, 'Toyota', 'Rav4');

console.log(toyotaRav.carInfo())