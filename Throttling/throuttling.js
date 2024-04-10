function throuttling(func, delay) {
  let flag=true;
  return function () {
    if (flag) {
      func();
      flag=false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}
function expensive() {
  console.log("Expensive Called");
}
const betterExpensive = throuttling(expensive, 1000);

window.addEventListener("mouseover", betterExpensive);
