// event object:---->

// console.log("script start");
// const allBtn = document.querySelectorAll("div button");
// console.log(allBtn);
// allBtn.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     var num = 0;
//     for (i = 0; i < 1000000000; i++) {
//       num += i;
//     }
//     console.log(e.currentTarget.textContent);
//   });
// });
// var myvar = 0;
// for (i = 0; i < 100000000; i++) {
//   myvar += i;
// }
// console.log(myvar);
// console.log("Script end");

// ----------------------------event projects-------------------------
const currentColor = document.getElementById("currentColor");
const colorCodeRange = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const allBtn = document.querySelectorAll("div button");
allBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let colorCode = "";
    // const color = e.target.textContent;
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * 16);
      let codeChar = colorCodeRange[index] + "";
      colorCode += codeChar;
    }
    // document.body.style.backgroundColor = `${color}`;
    document.body.style.backgroundColor = `#${colorCode}`;
    currentColor.innerText = `Current color is: #${colorCode}`;
    // document.body.style.backgroundColor = `rgb(${Math.floor(
    //   Math.random() * 256
    // )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`; //rgba formate
    // currentColor.innerText = `Current color is: rgb(${Math.floor(
    //   Math.random() * 256
    // )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;

    colorCode = "";
  });
});
