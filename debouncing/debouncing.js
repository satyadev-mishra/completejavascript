const inputField = document.querySelector("#input-event");
function debounce(func, delay) {
  let timeOutId;
  return function (...args) {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    const id = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
    timeOutId = id;
  };
}
function findSuggestion(e) {
  const key = e.target.value;
  console.log("Suggestion for:", key);
}
const decoratorFindSuggestion = debounce(findSuggestion, 400);

inputField.addEventListener("input", decoratorFindSuggestion);
