// ______________-----this Call Apply and Bind in js---__________________

// this is keyword in js it is equal to current(function or method called by which object) object
// console.log(this)
// console.log(window)
// that means 

// function hello(){
//     console.log(this);
// }
// hello()
// window.hello()


// const user1={
//     firstName:"Satayadev",
//     age:24,
//     // about:function(){
//     //     console.log(this)
//     //     console.log(`name is ${this.firstName} and age is ${this.age}`)
//     // }
//     // about(){
//     //     console.log(this)
//     //     console.log(`name is ${this.firstName} and age is ${this.age}`)
//     // }
// }
// user1.about()

// --------------------------------------------------------------------------------------------



// const user1={
//     firstName:"Satayadev",
//     age:24,
//     about(){
//         console.log(`name is ${this.firstName} and age is ${this.age}`)
//     }
// }
// const user2={
//     firstName:"Sajan",
//     age:15,
//     about(){
//         console.log(`name is ${this.firstName} and age is ${this.age}`)
//     }
// }
// const user3={
//     firstName:"Sanjeev",
//     age:32,
//     about(){
//         console.log(`name is ${this.firstName} and age is ${this.age}`)
//     }
// }





// ---------------------------------------------------------------------------
// function  about(){
//     console.log(`hello World!`)
// }
function  about(city,state){
    console.log(`name is ${this.firstName} and age is ${this.age} city: ${city} state: ${state} `)
}

const user1={
    firstName:"Satayadev",
    age:24,
   
}
const user2={
    firstName:"Sajan",
    age:15,
    
}
const user3={
    firstName:"Sanjeev",
    age:32,
}

// about()
// about.call() //call is special method which use to call any function or method
// about.call(user1) //it can takes as many arguments but first argument will be an object
// about.call(user2) //it can takes as many arguments but first argument will be an object
// about.call(user3,"fariadabd","Haryana") //it can takes as many arguments but first argument will be an object

// ----------------------------------------------APPLY-------------------------------

// about.apply(user2,["faridabad","haryana"])


// ----------------------------------------------BIND-------------------------------
// bind return the function with object refrence so we can call that function seperately
const info=about.bind(user1);
info("Faridabad","Haryana")