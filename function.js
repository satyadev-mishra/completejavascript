// function indexOfArray(array, target){ //----------function declaration
//     for(let index in array){
//         if(array[index]==target){
//             return index;
//         }
//     }
//     console.log("target did not matched with array!");

// }

// const indexOfArray = function(array, target){ //----------function Expression
//     for(let index in array){
//         if(array[index]==target){
//             return index;
//         }
//     }
//     console.log("target did not matched with array!");

// }

// const indexOfArray = (array, target)=>{ //----------Arrow Function
//     for(let index in array){
//         if(array[index]==target){
//             return index;
//         }
//     }
//     console.log("target did not matched with array!");

// }
// const arrayData=["rajan","sajan","main khan","vishal","sakshi"]
// // const targetData="sakshi"
// const targetData="s"
// const targetIndex=indexOfArray(arrayData,targetData);
// console.log(targetIndex);

// const firstChar=(anyString)=>{   //when no argument and more than one arguments
//     return anyString[0];
// }

// const firstChar = anyString =>{  //when only one argument
//     return anyString[0];
// }

// const firstChar = anyString => anyString[0]     //we can skip return keyword

// console.log(firstChar("Rajan"));

//Call back function --> a function passed as an argument in another function by the parameter naming convintion "callback" and called inside in another function known as callback function.
                            // ---it is usefull to recieve a data which is already available by the function in which it is called and that data passed as an argument to callback function


function printResult(answer){
    console.log(answer);
}                         

function addTwoNumber(num1,num2,callback){
    let sum=num1+num2;
    callback(sum);
}

addTwoNumber(10,15,printResult);