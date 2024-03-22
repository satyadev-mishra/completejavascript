//__proto__ or [[prototype]]  is same thing   ,, __proto__ is also know as dunder proto

// NOTE: but prototype is another thing discuss in another file prototype.js


// const obj1={
//     key1:"value1",
//     key2:"value2",
// }

// const obj2={}

// obj2.key3="value3";
// obj2["key4"]="value4";

// console.log(obj2.key3)
// console.log(obj2.key1) ---undefined   to deal with it we use proto

// -----------------------------------------here it is-------------------------------------------

// const obj2=Object.create(obj1)

// obj2.key3="value3";
// obj2["key4"]="value4";

// // console.log(obj2)
// // console.log(obj2.key1)
// // console.log(obj2.__proto__)

// ------------------------------so to deal with beforeProto.js file updated as----------------

const protoObj={

    about() {
        console.log(this.firstName, this.lastName);
      }
}

function createUser(firstName, lastName, age) {
    // const user = {};

    const user=Object.create(protoObj);

    user.firstName = firstName;
    user["lastName"] = lastName;
    user.age = age;
    return user;
  }
  
  const user1 = createUser("Satyadev", "Mishra", 24);
  const user2 = createUser("Sajan", "Mishra", 20);
  const user3 = createUser("Shivam", "Tiwari", 22);
  
  console.log(user1);
  console.log(user2);
  
  user2.about();