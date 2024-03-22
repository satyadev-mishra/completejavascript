// to read about javascript code executation got to  :  https://medium.com/swlh/what-does-it-mean-by-javascript-is-single-threaded-language-f4130645d8a9
let foo = "foo";
console.log(foo);
function getFullName(fname, lname) {
  console.log(arguments);
  let myVar = "inside my func";
  console.log(myVar);
  const fullName = fname + " " + lname;
  return fullName;
}
const personName = getFullName("Satyadev", "Mishra");
console.log(personName);
