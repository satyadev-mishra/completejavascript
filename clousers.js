// closures: when a function returned by a function it return with bundelded function declaration as well as lexical scope variable and function
function printName(firstName, lastName) {
  //   let fname = firstName;
  //   let lname = lastName;
  function callfunctionoflexical() {
    console.log("i am lexical scope function");
  }
  const iamreturning = function () {
    // console.log(`first name:${fname} lastname:${lname}`);
    console.log(`first name:${firstName} lastname:${lastName}`);
    callfunctionoflexical();
  };
  return iamreturning;
}

const ans = printName("Satyadev", "Mishra");
ans();
