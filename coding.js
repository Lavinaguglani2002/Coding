// //JS is a programming/scripting language and it is used to create dynamic and interactive web pages 
// //using script tag-<script src="start.html"></script>
// //console.log-is used to print a message to the console
// console.log("hello")
// console.log(10+20)
// console.log("my name is neha")
// alert("hello")
// Numberr=prompt("enter number")
// console.log(Numberr)
// num=confirm("are u confirm the order")
// console.log(num)
// //null-value can be empty and undefined-not assign the value
// x=null;
// console.log(x)
// undefined
// y;
// console.log(y);
//  console.log(y);
// // Boolean-true,false-0 and 1
// isFolloww=1;
// console.log(isFolloww);

// ///variables-let,var,const
// //let-value can be reassigned but variable cannot be declared
// let a=32
// let b=34
// let c=a+b;
// console.log(c);


//alert
//prompt/confirm
alert("heello")
let f=prompt("enter num")
console.log(f)
confirm("are u want to continue")

//  a=67
//  b=34
//  c=a+b;
//  console.log(c);

// //const-variable cannnot be redeclared and reassigned
//  const d=12
//  const e=16
// //   d=14 -not reaasign ,redeclared
//   console.log(d)
// //var can be redeclared and reassigned
//   var f=12;

//  var f=17;
//   console.log(f);

//variable
//   let h=null;
//   console.log(h);

let z=90
 z=89

 const y=90
  h=98
  console.log(y);


//   //single line comment
//   /* multiline comment*/ 
//   //operators-operator is a symbol and it is used to perform some operations on data -like addition,subtraction,modulus
//   //Arithmetic operator-+,-,*,/,%,**2**3,
//   //Relationalor comparison operators->,<,>=,<=
//   //logical operator-&&,||
//   //increement and decreemnet-a++,a--,++a,--a
//   //a++-10,11 a=a+1,a--=a=a-1
//   //Assignment operators= =,+=,-=


//   //Arithmetic operators
  
//   let a=Number(prompt("enter the value of a"))
//   let b=Number(prompt("enter the value of b"))
//   let c=a+b;
//   console.log(c);
//   console.log(a-b);
//   console.log(a%b);
//   console.log(a**b);
//   console.log(a/b);
//   //Assignment operator
//   let x=13;
//   x+=5;
//   //x=x+5
//   console.log(x);
//   x=x*2;//18*2=36
//   console.log(x);
//   x-=10;///36-10
//   console.log(x)



// //Logical operator
// //&& then ||
// //!-not operator
// let age=20;
// let ID=1;
// console.log(age<=18 && ID>=1)
// //false&&true-false
// console.log(age<=18||ID>=1)
// //false||true-true
// console.log(!ID)

// //Increement and decreement operator
// let z=7
// z++;
// console.log(z);
// z--;
// console.log(z);
// z=z-5;  //7
// console.log(z);
// ++z;
// console.log(z)

// //Ternary operator-three conditons
// //conition?true:false -short form of iflese

// let agee=20;
// let result=agee<=18?"Adult":"Minor"
// console.log(result);
  
// //Relational operator
// let f=Number(prompt("enter a number"))
// let i=Number(prompt("enter 2nd no"))
// console.log(f>i)
// console.log(f==i);
// console.log(f>=i);

//Bitwise operator
let j=5;
let k=3;
console.log(j&k);

let l=4;
let i=6;
console.log(l|i);

//b^g
  let s=7;
  let t=8;
  console.log(s^t);

  //typeof
  let namee="neha";
  console.log(typeof namee)
  console.log(typeof s)

  //String operator
  let first="Lavinna"
  let last="Guglani"
  let full=first+" " + last;
  console.log(full)


  //Conditional statement-
  //if ,ifelse,else if ladder,switch statement
  let ageee=34
  if(ageee<34){
  console.log("eligible")
  }

  //ifelse
  let agy=34
  if(agy<34){
  console.log("eligible")

  }else{
    console.log("not eligible")
  }
  
  //elseif ladder

//   let marks=parseInt(prompt("enter the marks"));
//   if(marks>=90){
//     console.log("grade A")
//   }else if(marks>=80){
//     console.log("grade B")
//   }
//   else if(marks>=70){
//     console.log("grade c")
//   }
//   else if(marks>=60){
//     console.log("grade d")
//   }else{
//     console.log("fail")
//   }
//   //using logical and or operator 
// //Number
//   let markss=Number(prompt("enter the marks"))
//   if(markss>89 || markss<=80){
//     console.log("grade A")
//   }
//   else if(markss=79 && markss>=70){
//     console.log("grade B")
//   }
//   else if(markss>=60 && markss<=50){
//     console.log("grade c")
//   }
//   else{
//     console.log("failed")
//   }

  //largest of three numbers using prompt and logical and opertor

  var a=parseInt(prompt("enter 1st no"))
  var b=parseInt(prompt("enter 2nd no"))
  var c=parseInt(prompt("enter 3rd no"))

  if(a>=b && a>=c){
    console.log("a is the largest")
  }
  else if(b>=a &&b>=c){
    console.log("b is the largest")
  }
  else{
    console.log("c is the largest")
  }

  //using if else-even numbers-num%2==0
  let number=8;
  if(number%2==0){
    console.log("even no")
  }
  else{
    console.log("odd noo")
  }


  //Switch statement-
  let day=parseInt(prompt("enter the day number"));
  switch(day){
    case 1:
      console.log("monday");
    break;
    case 2:
      console.log("tuesday");
      break;
       case 3:
      console.log("wednesday");
      break
      case 4:
      console.log("thursday");
      break
      default:
        console.log("invalid day")

  }
//marks using switch statement case num>=90:
  