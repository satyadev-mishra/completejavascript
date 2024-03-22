const counter=document.querySelector("h1");
const increaseBtn=document.querySelector("#increase");
const decreaseBtn=document.querySelector("#decrease");
let count=counter.innerHTML;

const increseCount=()=>{
    // alert("increase")
    count++;
    counter.innerHTML=count;
    
}
const decreaseCount=()=>{
    // alert("Decrease")
    
    if(count>=1){
        count--;
        counter.innerHTML=count;
    }
    
}

increaseBtn.addEventListener("click",increseCount)
decreaseBtn.addEventListener("click",decreaseCount)