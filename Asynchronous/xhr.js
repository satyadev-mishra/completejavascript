// xhr --XMLHttpRequest
const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr)
// console.log(xhr.readyState)
// xhr.open("GET", URL);
// console.log(xhr.readyState)

// xhr.onreadystatechange = function () {
//     // console.log(xhr.readyState)

//     if (xhr.readyState === 4) {
//         const response = xhr.response;
//         const data = JSON.parse(response)
//         console.log(data);
//     }
// }

// xhr.onload = function () {
//     if (xhr.status >= 200&&xhr.status<300) {
//         const response = xhr.response;
//         const data = JSON.parse(response)
//         console.log(data);
//     }
//     else {
//         console.error("something went wrong!")
//     }
// }
//   xhr.onerror = () => {
//        console.error("something went wrong, Network error")
//     }
//     xhr.send();



// ------------------------------using promise------------------------
console.log("first")
function getRequest(method,url) {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (xhr.status >= 200&&xhr.status<300) {
                resolve(xhr.response);
            }
            else {
                reject("Something went wrong!")
            }
        }
        xhr.error = () => {

            reject("Something went wrong in network!")
        }
        xhr.send()
    })
}
getRequest("GET",URL)
    .then((response) => {
        return JSON.parse(response)
    //    return Promise.resolve(JSON.parse(response))
    })
    .then((data) => {
    console.log(data);
    })
    .catch ((error) => {
        console.log(error)
    })