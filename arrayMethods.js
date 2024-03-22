//forEach method in array

// const numbers=[51,22,100,45,75,6];

// console.log(`number is ${numbers[0]} and index is ${0}`);
// console.log(`number is ${numbers[1]} and index is ${1}`);

// for(let i=0;i<numbers.length;i++){
//     console.log(`number is ${numbers[i]} and index is ${i}`);
// }


// function printArrayNumAndIndex(number,index,array){  //but no return type //that means it is void return type
//     console.log(`number is ${number} and index is ${index} array is ${array}`);
// }

// for(let i=0;i<numbers.length;i++){
//    printArrayNumAndIndex(numbers[i],i);
// }


// numbers.forEach(printArrayNumAndIndex);

// numbers.forEach(function(number,index,array){
//     console.log(`number is ${number} and index is ${index} array is ${array}`);
// });


// numbers.forEach(number=>{
//     console.log(`number is ${number}`);
// });



//map method

// const evenNumArray=numbers.map((number)=>number%2===0);
// const evenNumArray=numbers.filter((number)=>number%2===0);
// console.log(evenNumArray);


//sort
// const numbers=[51,22,100,45,75,6];

// // numbers.sort();
// // numbers.sort((x,y)=>x-y);//asending order
// numbers.sort((x,y)=>y-x);//desending order

// console.log(numbers)



// const person=[
//     {
//         id:null,
//         name:"satyadev mishra"
//     },
//     {
//         id:null,
//         name:"sajan mishra"
//     },
//     {
//         id:null,
//         name:"Manoj mishra"
//     }
// ]


let numArray= new Array(10);
numArray.fill(0);
numArray=numArray.map((_,i)=>i+1)
console.log(numArray);





