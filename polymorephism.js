// polymorephism :----------> it is oop feature which defiens one has many form
// in javascript it can be used in iheritance behaviour
// same method define in parent class as weel as base or child class with diffrent modification
// as instance call that method firstly it will check in own class if it is there execute else jump to base class and call that method
class Parent {
  hello() {
    console.log("Hello from parent");
  }
}
class Child extends Parent {
  hello() {
    console.log("Hello from inside My class");
  }
}
const child1 = new Child();
child1.hello();
