console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
//Loops-for,while,dowhile //i=i+1
// for(let i=1;i<=10;i++)
for(let i=1;i<=20;i++){
    console.log("hello")
    console.log(i)
}
//while loop
let i=2;
while(i<=20){
    console.log(i);
    i++;
}

//Dowhile loop
let j=3;
do{
    console.log(j);
    j++;
}
while(j>=5);

///for of loop-for(let val of stringvariable)-""
let namee="Ziya";
for(let letterr of namee){
console.log(letterr);
}


//for in loop
let  student={
    Namee:"Falak",
    age:20,
    course:"Javascript"
};
for(let key in student ){
    console.log(key);
    console.log(student[key])
}


//Strings-"Lavina"

let str="Diya";
console.log(str);
console.log(str.length)
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//slice-d-0,i-1,y-2,a-3 (0,2)-0,1 2 exclude
console.log(str.slice(0,2))
console.log(str.slice(0,5))

let stri="Javascript";
let str2=" I am learning javascript     "
console.log(str2.slice(0,7));
console.log(stri.slice(1,8));
console.log(stri.slice(4));
console.log(stri.slice(0,-3))
console.log(str2.trim())
//avas-slice(start,end)

//concatenation-combine
let first="Hello";
let second="World";
console.log(first.concat(second));
console.log(first+second);
//include()
let str3="Hello i am a girl"
console.log(str3.includes("Helo"))
//replace
console.log(str3.replace("girl","boy"))
//indexOf
console.log(str3.indexOf("a"))



//without arrays
let marks=80;
let marks2=78;
let marks3=67;
console.log(marks);
console.log(marks2);
console.log(marks3)

let marks1=[80,78,67,45,89]
console.log(marks1)
console.log(marks1[3]);
let students1=["aman","siya"]
console.log(students1)
console.log(students1[2]);
marks1[2]=56;
console.log(marks1)//mutable-array and string-immutable
students1[1]="ziya"
console.log(students1)
let str4="hello"
str4[0]="H";
console.log(str4)

let city="Bathinda";
city[1]="A";
console.log(city);

//Array methods

//length
let fruits=["apple","mango","orange"]
console.log(fruits.length)
//push
let fruitss=["apple","mango","orange"]
fruitss.push("pear");
console.log(fruitss);
//pop-remove from the last end
fruitss.pop();
console.log(fruitss);
//unshift-adds an element at the beginning
fruitss.unshift()
    console.log(fruitss);
//shift-remove from the beginning
let fruit1=["pear","orange","papaya"]
fruit1.shift();
console.log(fruit1);
//indexOf
let fruit2=["mango","apple"];
console.log(fruit2.indexOf("apple"));
let numbers=[10,20,30,40,50]
console.log(numbers.slice(1,4))
//splice -splice(startInddex,deletecount)
let number1=[10,20,40,50,60];
number1.splice(1,2);

console.log(number1)
number1.splice(0,4)
console.log(number1);
//join-
let fruits5=["apple","mango","orangw"];
console.log(fruits5.includes("apple"))
console.log(fruits5.join("-"));



let arr=[20,30,40,50,60];
arr.splice(1,3);
console.log(arr);
let arr1=[80,20,40];
console.log(arr1.reverse())

arr1.sort();
console.log(arr1)
let names=["riya","diya","aman"]
names.sort();
console.log(names)


//let numbers=[40,10,30,20,50]
//add 60 at the end of array
//remove the last elemnt
//delete the element at index2 using splice(2,1)
//check whether 30 exists in the array or not includes
//sort the array in ascending order sort
//reverse the array  reverse()

//fucntions
//function definition,function call
function greet(){
    console.log("hello students")
}
greet();//function call
greet();greet();greet();greet();greet();


function sum(a,b){//parameters
    console.log(a+b);
}
sum(10,20);//argumnets
sum(20,45)
sum(80,67);
function square( x){
    console.log(x*x);
}
square(7);
square(8);