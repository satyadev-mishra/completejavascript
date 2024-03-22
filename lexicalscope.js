// lexical scope:
let firstName = "Satyadev";
function a() {
  //function is present insde of global scope or we can say that is lexicaly present in global scope
  console.log(firstName);
  let lastName = "Mishra";
  function b() {
    //same as function a ---that is function lexically present inside of functin a
    console.log(lastName); //but last name not presrnt in function b so it will find in there own lexcical if it is not there it will continue finding till globale scope
  }
  b();
}
a();
//this is known as lexical environment
