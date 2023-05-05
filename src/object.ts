class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const cat = new Animal("Cat", "Mamal", "Meowww");
cat.makeSound();

const snake = new Animal("Cobra", "Reptile", "Hisssssss");
snake.makeSound();
