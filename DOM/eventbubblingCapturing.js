const body = document.body;
const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// -------------concept of bubbling-----bottom to top or child to parent (default behavior)------
// child.addEventListener("click", () => {
//   console.log("you clicked on child!!!");
// });
// parent.addEventListener("click", () => {
//   console.log("you clicked on parent!!!");
// });
// grandParent.addEventListener("click", () => {
//   console.log("you clicked on grandparent!!!");
// });
// body.addEventListener("click", () => {
//   console.log("you clicked on body!!!");
// });

// ---------------concept of capturing top to bottom
// body.addEventListener(
//   "click",
//   () => {
//     console.log("you clicked on body!!!");
//   },
//   true
// );
// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("you clicked on grandparent!!!");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("you clicked on parent!!!");
//   },
//   true
// );
// child.addEventListener(
//   "click",
//   () => {
//     console.log("you clicked on child!!!");
//   },
//   true
// );

// ---------------concept of delegation on need to select parent and it will give the taget element using target object

// body.addEventListener(
//   "click",
//   (e) => {
//     console.log("you clicked on !!!", e.target);
//   },
//   true
// );
body.addEventListener("click", (e) => {
  console.log("you clicked on !!!", e.target);
});
