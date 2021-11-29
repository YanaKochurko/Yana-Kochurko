const animals = [
    { name: "Cat", color: "White", age: "3", voice: 'Meow' },
    { name: "Dog", color: "Brown", age: "4", voice: 'Woof' }, 
    { name: "Cow", color: "Black", age: "5", voice: 'Moo' }
   ];

class Animal {
  constructor(name, color, age, voice) {
     this.name = name;
     this.color = color;
     this.age = age;
     this.voice = voice;
  }

  say() {
    console.log (`${this.name} is ${this.age} years old and says ${this.voice}`);
  }
}

const animalsFabric = (arr) => arr.map((item) => new Animal(item.name, item.color, item.age, item.voice));


animalsFabric(animals).forEach(animal => {
  animal.say();
});

