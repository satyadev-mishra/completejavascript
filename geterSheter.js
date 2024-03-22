//encapulation
class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get details() {
    console.log(`name:${this.name} and age:${this.age}`);
  }
  set details(dataToBeSet) {
    const [name, age] = dataToBeSet.split(",");
    this.name = name;
    this.age = +age; //convert sting to number
  }
}

const p1 = new Person("sataydev", 24);
// p1.#age;
p1.details; //details is function but now here using as like property of an object
p1.details = "Rajan,26";
p1.details;
