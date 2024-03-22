//------------question 1--------------------
// {
//     let a=10;
//     let b=20;
//     console.log(a);
//     console.log(b);
// }
// // console.log(a);  //---Uncaught ReferenceError: a is not defined at interview.js:9:13
// console.log(b);


//------------question 2--------------------
    // console.log(a);  //ReferenceError: Cannot access 'a' before initialization
    // var a=10;
    // let a=10;   NOTE: let also show hoisting but DUE to temoral Dead Jone it does not access data




//------------question 3--------------------

// const array=[1,2,3];
// array[4]=5; ------>[1,2,3,empty,5]

// console.log(array.length);
// console.log(array);
// console.log(array[3]); //undefined
// console.log(array[4]);


//------------question 4--------------------
// const array=[1,2,3];
// console.log(array.indexOf(3)); //its gives the index no. of element 
// console.log(array.indexOf(6)); //its gives the index no. of element but 6 is not inside of array so it will give -1

//------------question 5--------------------
// var a=10;
// function foo(){
//     console.log(a);
//     var a=20;
// }

// foo();

//------------question 6--------------------

// console.log("Start");

// setTimeout(()=>{
//     console.log("Time Out");
// },0)

// console.log("End");

//------------question 7--------------------

// for(var i=1;i<=3;i++){
//     // console.log(i);
//     setTimeout(()=>{
//         console.log(i);
//     },1000)
// }


//------------question 7--------------------

const user1={
    name:"ramesh",
    age:25,
    address:{
        city:"mumbai",
        state:"maharshtra"
    },
}

const user2={...user1}; //spread operator
user2.name="shyam",
user2.address.city="delhi";

console.log(user2)
console.log(user1)