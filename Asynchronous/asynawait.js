const URL = "https://jsonplaceholder.typicode.com/posts";
async function getRequest(method, url) {
    const response = await fetch(url); 
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error("Something went wrong!");
    }
}
getRequest()
    .then((data) => {
    console.log(data)
})