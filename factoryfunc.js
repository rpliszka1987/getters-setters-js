
const createCharacter = (name, level) => {
  return {
    name: name,
    level: level,
    hello() {
      console.log(`${this.name} welcome back, your level is ${this.level}`);
    },
  };
};

const spiderman = createCharacter('Spider-Man', 100);

spiderman.hello()
