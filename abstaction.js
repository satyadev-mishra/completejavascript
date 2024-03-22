class Employee {
  #salary;
  #bonus = 5000;
  constructor(name, age, salary = 10000) {
    this.name = name;
    this.age = age;
    this.#salary = salary;
  }
  #bonusCalculate() {
    return this.#salary + this.#bonus;
  }
  totalSalary() {
    console.log(this.#bonusCalculate());
  }
}

const rajan = new Employee("Rajan Mishra", 24, 15000);
console.log(rajan.age);
console.log(rajan.name);
rajan.totalSalary(); //hiding the calculation of salary here shows abstarction here
