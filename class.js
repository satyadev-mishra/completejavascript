//-----------------Class in JavaScript
class Animal {
  constructor(name, age) {
    console.log("Cunstuctor called as object is created");
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("Hello, There!");
  }
  get info() {
    // return `${this.age} ${this.name}`;
    console.log(`${this.age} ${this.name}`);
  }
}
let animal1 = new Animal("Dog", 8);
// console.log(animal1);
// animal1.info()
// animal1.info;
// console.log(animal1.info())

// ----OOP--concepet
// 1.class --->
// 2.object--->
// 3.inheritance--->using extends keyword

class Dog extends Animal {
  cunstructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  sayHello(toName) {
    console.log("Hello,", toName);
  }
  tellSpeed() {
    console.log(`speed is: ${this.speed}`);
  }
}
const dog1 = new Dog("Tomy", 6, 34);
console.log(dog1);
dog1.info;
dog1.tellSpeed();
dog1.sayHello();
// 5.polymorphism--->
// 4.abstraction--->
// 6.encapsulation--->
// ---------------------------------------------------------------
// supper,static,get or getter, set or setter,

// SUPPER: supper reffers to class cunstructor
// STATIC: static keyword, attached to the property and method, and defines only class can access or call propety and method respectively  no object of that class can access
// GET: get is keyword attached to method and defines, method can be called as like property accessed
// SET: set is keyword attached to method and defines, it change the syntax of (changing a property value by passing a argument in method) instead of we can access that function like a property and assign all the possible value in string using custom delemter (white space, hyphon ,comma, and etc.)
