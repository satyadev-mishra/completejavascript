// ---------------------------next version of we study about function behave like a object in js---------------------

// function hello(){
// function Hello() {   //---------NOTICE: whenever we make prototpe of any function, function name should be start with capital letter it recommende to use and naming convitation
//   console.log("Hello bolo");
// }

// Hello();
// console.log(typeof Hello)
// console.log(Hello.name) //-----here Hello is function but it is accesing name property how is this possible

// ---------------------------------------this happen due to function is function + object
// 1. whenever a function is created, along with it create free space that is object----this object is know as prototpe

// console.log(Hello.prototype)  {}
// Hello.prototype.newProperty = "newValue";
// Hello.prototype.newMethod = function () {
//   console.log("i am a protype method of Hello function");
// };

// console.log(Hello.prototype);
// Hello.prototype.newMethod();

// ---------------------------real implementation of prototype from file proto.js --------------

// function CreateUser(firstName, lastName, age) {
//   // const user = {};

//   const user = Object.create(CreateUser.prototype); //here we are passing the object refrence which is createuser function 's  object

//   user.firstName = firstName;
//   user["lastName"] = lastName;
//   user.age = age;
//   return user;
// }

// CreateUser.prototype.about = function () {
//   console.log(this.firstName, this.lastName);
// };

//   const user1 = CreateUser("Satyadev", "Mishra", 24);
//   const user2 = CreateUser("Sajan", "Mishra", 20);
//   const user3 = CreateUser("Shivam", "Tiwari", 22);

// console.log(user2);

//   CreateUser.prototype.about();
// console.log(CreateUser.prototype.about())

// const user1 = CreateUser("Satyadev", "Mishra", 24);
// const user2 = CreateUser("Sajan", "Mishra", 20);
// const user3 = CreateUser("Shivam", "Tiwari", 22);

// console.log(user1);
// user1.about();
// --------------making a cunstructor function using new Keyword--------------------------------------------------------
function CreateUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.about = function () {
    console.log(this.firstName, this.lastName);
  };
}

const user1 = new CreateUser("Satyadev", "Mishra", 24);
const user2 = new CreateUser("Sajan", "Mishra", 20);
const user3 = new CreateUser("Shivam", "Tiwari", 22);

console.log(user1);
user1.about();

// ------------------------------------something intresting about prototype in javascript-----------------

// const numbers = [1, 2, 3, 4, 5];

const numbers = new Array(1, 2, 3, 4, 5);
console.log(Array.prototype);
function Hello() {}
console.log(Hello.prototype);
Hello.prototype = [];
console.log(Hello.prototype);
console.log(Array.prototype);

// --------------------and this code is further updated with class keyword in es6 we start using class
