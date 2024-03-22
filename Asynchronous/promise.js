console.log("start script")

// const kitchen = ["tealeaf", "gingerr", "water", "suger", "milk"];
// // producing promise
// const tea = new Promise((resolve, reject) => {
//     if ((kitchen.includes("tealeaf") && kitchen.includes("water")&&kitchen.includes("suger")) && (kitchen.includes("ginger") || kitchen.includes("milk")))
//     {
//         resolve("Your Tea");
//     }
//     else {
//         reject("sorry couldn't make it...:")
//     }
// })

// console.log(tea)

// new consuming promise

// tea.then((response) => {
//     console.log(response);
// }, (error) => {
//     console.log(error)
// })

// --------------or use catch method-----------------
// tea.then((response) => { console.log(response) })
//     .catch((error) => { console.log(error) })
   
// setTimeout(() => {
//     console.log("inside settime out")
// },0)

// console.log("end script")

// -----------------------// --------------we can return a promise  from a function-----------------

const kitchen = ["tealeaf", "gingerr", "water", "suger", "milk"];
// producing promise
const tea = ()=>{
    return new Promise((resolve, reject) => {
    if ((kitchen.includes("tealeaf") && kitchen.includes("water")&&kitchen.includes("suger")) && (kitchen.includes("ginger") || kitchen.includes("milk")))
    {
        resolve("Your Tea");
    }
    else {
        reject("sorry couldn't make it...:")
    }
})
}

tea().then((response) => { console.log(response) })
    .catch((error) => { console.log(error) })
   
setTimeout(() => {
    console.log("inside settime out")
},0)

console.log("end script")