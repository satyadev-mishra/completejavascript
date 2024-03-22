// 1. we want to change and text after one second one after one using asyncronously
const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");
const h5 = document.querySelector(".h5");

// setTimeout(() => {
//   h1.style.color = "red";
//   h1.textContent = "Heading 1";
// }, 1000);
// setTimeout(() => {
//   h2.style.color = "green";
//   h2.textContent = "Heading 2";
// }, 2000);
// setTimeout(() => {
//   h3.style.color = "Yellow";
//   h3.textContent = "Heading 3";
// }, 3000);
// setTimeout(() => {
//   h4.style.color = "blue";
//   h4.textContent = "Heading 4";
// }, 4000);
// setTimeout(() => {
//   h5.style.color = "pink";
//   h5.textContent = "Heading 5";
// }, 5000);
// ----------------------modefied code of above code--------------

// ----------------callback hell ---->callback inside callback
// setTimeout(() => {
//   h1.style.color = "red";
//   h1.textContent = "Heading 1";
//   setTimeout(() => {
//     h2.style.color = "green";
//     h2.textContent = "Heading 2";
//     setTimeout(() => {
//       h3.style.color = "Yellow";
//       h3.textContent = "Heading 3";
//       setTimeout(() => {
//         h4.style.color = "blue";
//         h4.textContent = "Heading 4";
//         setTimeout(() => {
//           h5.style.color = "pink";
//           h5.textContent = "Heading 5";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ----------------------modefied code of above code--------------
function changeElement(element, color, text, time, onResolve, onReject) {
  setTimeout(() => {
    if (element) {
      element.style.color = color;
      element.textContent = text;
      if (onResolve) {
        onResolve();
      }
    } else {
      if (onReject) {
        onReject();
      }
    }
  }, time);
}

// changeElement(h2, "green", "Heading 2", 2000);
// changeElement(h3, "yellow", "Heading 3", 3000);
// changeElement(h4, "pink", "Heading 4", 4000);
// changeElement(h5, "blue", "Heading 5", 5000);

// ----------------------modefied code of above code--------------

// -----------------------callback hell or Pyramid of dom

changeElement(h1, "red", "Heading 1", 1000, () => {
  changeElement(h2, "green", "Heading 2", 1000, () => {
    changeElement(h3, "blue", "Heading 3", 1000, () => {
      changeElement(h4, "pink", "Heading 4", 1000, () => {
        changeElement(h5, "voilet", "Heading 5", 1000, (
        
        ) => {}, () => {console.log("h5 does not exist")});
      }, () => {console.log("h4 does not exist")});
    }, () => {console.log("h3 does not exist")});
  }, () => {console.log("h2 does not exist")});
 }, () => {console.log("h1 does not exist")});
