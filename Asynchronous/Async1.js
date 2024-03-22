// ----------------Synchronous
// console.log("script start");
// for (let i = 0; i < 10000000; i++) {   //---------this line wait till compleation of  it than next line will execute
// //   console.log("Synchronous");
// }
// console.log("script end");

// ---------------Asynchronous
// console.log("script start");
// const id = setTimeout(function () {
//   //setTime is predefined asynchronous function it will execute by the browser in background and it will execute untill the hole synchronous operation is done. and NOTE: it return a id
//   console.log("Asynchronous");
// }, 0);
// console.log(id);
// console.log("script end");
// -------------------we can clear settimeout
// clearTimeout(id);

// --------------------setInterval()-----------
console.log("script start");
const id = setInterval(() => {
  console.log(Math.random());
}, 1000);
console.log("script end");
clearInterval(id);
