// ___________----OPTIONAL CHAINING----_____________

// 1. it is used in nested object 
// 2. it prevent the error or stop the executation of where propert is not found and stop accesing ahed nested property


// EXAMPLE:
// const user={
//     firstName:"Satyadev",
//     address:{
//         hNo:1016,
//         city:"Faridabad"
//     }
// }

// in normal case we access data of object like ----->

// console.log(user)
// console.log(user.firstName)
// console.log(user.address)
// console.log(user.address.city)

// but incase somehow address is not accesed yet 

// const user={
//     // firstName:"Satyadev",
//     // // address:{
//     // //     hNo:1016,
//     // //     city:"Faridabad"
//     // // }
// }
let user;
// console.log(user.address.city) ///so tackle this problem we use optional chaning

// 1. it check the property first if it is available it access further proprty else return undefined and stop accessing ahed proprty
console.log(user?.address?.city) ///so tackle this problem we use optional chaning