// super keyword reffers to class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  about() {
    console.log(`name is ${this.name} and Age:${this.age}`);
  }
}
const animal1 = new Animal("Animal", 1);
console.log(animal1);
animal1.about();
class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  detaildInfo() {
    console.log(this.speed);
    super.about(this.age, this.name);
  }
}

const dog1 = new Dog("veeru", 2, 20);
console.log(dog1);
dog1.about();
dog1.detaildInfo();
