let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a=56;
    a++;
    console.log(a);
}
let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("u are inside div")
}
btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked")
})
btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked")
})