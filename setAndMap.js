const array=[1,2,3,4,5,5];
console.log(array)


//set is cunstructer object  ---->create a array like object
// duplicate value are not allowed 
// it is not guaranted of order fashion  

// const numbers= new Set();
// const numbers= new Set([1,2,3,4,5,3]); //it takes only iterable value like sting, array //and cam talke onlue one value
// const numbers= new Set(); 
// numbers.add("rajan");
// numbers.add([1,2,3,4,5,5,6]);
// numbers.add([1,2,3,4,5,5,6]); //----due to refrance type her both array are difrrent

//     const result=numbers.has("rajan7") //return true and false
//     console.log(result)
// console.log(numbers)
// console.log(numbers.length)// we can not find the length by the length property but we can find with the help of loop

// let length=0;
// for(let number of numbers ){
//     length++;
// }
// console.log(length)



// --------------map in java script

// map is use to store diffrent datatype as key 
// it also can not store duplicate value
// in map element store in order fashion means it is guaranteed that key in sequense wise


// object litterals ---> it is simple object where key can be in "sting " and symbol data type 


const personDetails=new Map();
personDetails.set("name","rajan")
personDetails.set(1,"rajan")
personDetails.set(1,"rajan")
personDetails.set([12,3,4,],"rajan")
console.log(personDetails)
