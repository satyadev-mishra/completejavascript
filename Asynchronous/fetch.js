const URL = "https://jsonplaceholder.typicode.com/posts";
// const myPromise=fetch(URL)
// console.log(myPromise) ---always return a promise
// fetch(URL)//-----------by default get method
//     .then((response) => {
//         // console.log(response)
//         if (response.ok) {
//             return response.json() //it convert json to objects and it also return a promisse
//         } else {
//             throw new Error("Something went wrong!");
//         }
//     }) 
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => { //this cath only executed on network issues 
//         console.log(error)
//     })

// -----------------------------using Post method
fetch(URL, {
    method: "POST",
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}, {
    headers: {
         'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then((response) => {
        // console.log(response)
        if (response.ok) {
            return response.json() //it convert json to objects and it also return a promisse
        } else {
            throw new Error("Something went wrong!");
        }
    }) 
    .then((data) => {
        console.log(data)
    })
    .catch((error) => { //this cath only executed on network issues 
        console.log(error)
    })