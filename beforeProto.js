// const person={
//     firstName:"Satadev",
//     lastName:"Mishra",
//     age:24,
//     about:function(){
//         console.log(this.firstName,this.lastName);
//     }
// }

// ----------------this in arrow function------------
// const person={
//     firstName:"Satadev",
//     lastName:"Mishra",
//     age:24,
//     about:()=>{
//         console.log(this.firstName,this.lastName); //due to in arraw function this refers to window object
//     }
// }

// -------------------------------------------------------------------------------------------------------

// const person = {
//   firstName: "Satadev",
//   lastName: "Mishra",
//   age: 24,
//   about: function () {
//     console.log(this.firstName, this.lastName);
//   },
// };
// const person2 = {
//   firstName: "Sajan",
//   lastName: "Mishra",
//   age: 20,
//   about: function () {
//     console.log(this.firstName, this.lastName);
//   },
// };
// const person3 = {
//   firstName: "Shivam",
//   lastName: "Tiwari",
//   age: 22,
//   about: function () {
//     console.log(this.firstName, this.lastName);
//   },
// };

// person.about();
// person2.about();
// person3.about();

// -------------------we can make a function to make same type of object------------------------------------------------------------------------

// function createUser(firstName, lastName, age) {
//   return {
//     firstName: firstName,
//     lasttName: lastName,
//     age: age,
//     about: function () {
//       console.log(this.firstName, this.lastName);
//     },
//   };
// }


// ---------------------or we can add propety in objects using dot (.) and bracket[] notation

// function createUser(firstName, lastName, age) {
//   const user = {};
//   user.firstName = firstName;
//   user["lastName"] = lastName;
//   user.age = age;
//   user.about=function () {
//     console.log(this.firstName, this.lastName);
//   }
//   return user;
// }

// const user1 = createUser("Satyadev", "Mishra", 24);
// const user2 = createUser("Sajan", "Mishra", 20);
// const user3 = createUser("Shivam", "Tiwari", 22);

// console.log(user1);
// console.log(user2);
// console.log(user2.about);
// user2.about();


// ----------------------method about is created for every object to make it only one we create it globally like bellow

// function about() {
//     console.log(this.firstName, this.lastName);
//   }

// function createUser(firstName, lastName, age) {
//     const user = {};
//     user.firstName = firstName;
//     user["lastName"] = lastName;
//     user.age = age;
//     return user;
//   }
  
//   const user1 = createUser("Satyadev", "Mishra", 24);
//   const user2 = createUser("Sajan", "Mishra", 20);
//   const user3 = createUser("Shivam", "Tiwari", 22);
  
//   console.log(user1);
//   console.log(user2);
//   about.call(user2);

//   user2.about();

