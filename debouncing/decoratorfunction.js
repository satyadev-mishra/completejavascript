//decorator function--------> it is a function which takes function as input and return a function by inhancing the functionality of  input function without changing its origional code

function greet(...args) {
  //rest operator
  console.log("Hello,", ...args); //spread operator
}
function decoratorFunction(func) {
  //rest operator
  return function (...args) {
    // func();
    // console.log(this);
    func.call(this, ...args); //spread operator
  };
}
const decoratedGreet = decoratorFunction(greet);
decoratedGreet("Rajan", "Sajan");
