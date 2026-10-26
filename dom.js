
// function showme(){
// let a=document.getElementById("greet").innerHTML="<U>Welcome</U>"
// console.log(a);
// }

// function showfruits(){
//     let b=document.getElementById("fruits").innerHTML="<ul><li>Apple</li><li>Mango</li><li>Orange</li></ul>"
//     fruits.style.background="rgb(23,45,68)";
//     fruits.style.fontSize="30px";
//     fruits.style.color="white"
//     fruits.style.border="4px solid black";
// console.log(b);
// }

// function changeText(){

// let b=document.getElementsByClassName("box1")[1].innerHTML="<span style='color:darkcyan;background:black'>Box4</span>"

// console.log(b);
// }
// function showpara(){

// let c=document.getElementsByTagName("p")[0].innerHTML="Welcome";
// console.log(c);
// }


// let e=document.querySelectorAll(".heading2");
// console.log(e);


// let d = document.querySelectorAll("#head, .head1");

// for (let element of d) {
//     element.innerHTML = "This is my 1st paragraph";
// }

// let div=document.querySelector("div")
// console.log(div);




 //Append -Adds content at the end of the selected element

 let a=document.createElement("h2");
 a.innerText="what a lovely girl";

 let c=document.createElement("button")
 c.innerText="Click me"
 let b=document.querySelector("h1");
 b.append(a,c);


 let d=document.createElement("h3")
 d.innerText="Hello"
 let e=document.getElementById("box")
 e.append(d)


 //after-insert content after the selected element

let f=document.createElement("span")
f.innerText="wow what a lovely picture"

let h=document.createElement("img");
h.src="html.png";
h.width=200;
h.height=100;

let g=document.querySelector("h4")
g.after(f,h);



//before-inserts content before the selected element

let j=document.createElement("p")
j.innerText="this is a boy"
document.querySelector("div").before(j);


//prepend-adds contentat the beginning of selected element


let btn=document.createElement("button");
btn.innerText="Show me";
btn.style.color="red";
btn.style.background="black";
btn.style.width="200px"
btn.style.border="2px solid black";
btn.style.padding="20px"
let k=document.querySelector("p")
k.prepend(btn);



let l=document.createElement("a");
l.innerText="Welcome to Google";
l.href="https://www.google.com";
let m=document.querySelector("p")
m.after(l);


//getattribute
let div1=document.querySelector("h5")
console.log(div1)

let div2=div1.getAttribute("class")
console.log(div2)


// let g2=document.querySelectorAll("#text,.text1")
// for(let element of g2){
//     element.innerText="There are 50 students in the class";
// }



let g2=document.querySelectorAll("#text,.text1")
g2[0].innerText="There are 30students in the class;"