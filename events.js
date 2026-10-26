function showmessage(){
    document.querySelector("#heading").innerText="Welcome to javascript"
}

function showcourse(){
    let a=document.querySelector("#course").value
    document.querySelector("#result").innerText="You selected"+ a;
}


function submitassignment(){
    document.getElementById("message").innerText="Assignment submit  successfully";
    document.getElementById('submitbtn').disabled=true;
}


let form=document.querySelector("#myform")
let namee=document.querySelector("#studentName")
console.log(namee.value)
let result=document.querySelector("#result");
form.onsubmit=function(){
    result.textContent="Welcome" +namee.value;
   
}


let b=document.querySelector("#box")
console.log(b.textContent);
console.log(b.innerText)


let btn2=document.createElement("button")
btn2.innerText="Show me"
let btn1=document.querySelector("#btn");
let result1=document.querySelector("#result")
btn1.addEventListener("click",function(){
    result1.textContent="Hello! welcome to javascript"
});
document.body.append(btn2)
btn1.addEventListener("click",function(){
    console.log("2nd function")
})

console.log("A")
console.log("B")
console.log("C");


console.log("A")
setTimeout(()=>{
    console.log("B")
},6000);
console.log("C");



let btn3=document.querySelector("#btn1");
let remove=document.querySelector("#remove1")
let heading=document.querySelector("#heading2")

btn3.addEventListener("click",function(){
    heading.textContent="Button clicked"
})
remove.addEventListener("click",function(){
    btn3.removeEventListener("click",function(){
        heading.textContent="remove event"
    })
})


function changecolor(){
    document.getElementById("heading4").classList.toggle("red")
}


function stopform(event){
    event.preventDefault();
    alert("form submitted")
}
