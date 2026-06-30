// let str = "ali raza";
// let size =0;
// for (let m of str){
//     console.log(m);
//     size++;

// }
// console.log("string size is =", size);


// const student = {
//     name : "ali",
//     cgpa : 45,
//     age : 3.6,
//     characcter : true,
// }
// for (let key in student){
//     console.log ("key=",key , "     value = ", student[key]);
// }

// practice Question built a Game 

// let gameNum = 50;
// let userNum = prompt("enter the game number : ");

// while (gameNum != userNum){
//      userNum = prompt("You enter the wrong number, Guess agian : ");

// }
// console.log("congratulation! you entered the correct number/");

// Template Literals in Javascricpt
// let student = {
//      name : "ali",
//      age : 34,

// }
// let output = `My name is ${student.name} and my age is ${student.age} and i am very intelligent`;
// console.log(output);
// console.log(`My name is ${student.name} and my age is ${student.age} and i am very intelligent`);

// let fullName = prompt("enter your full Name : ");
// let str = "@";

// let username = str + fullName + fullName.length;
// console.log(username);
// // console.log(str.concat(fullName));



// let arr = ["abu bakar", "umar","usman","ali" ]
// for (let i = 0; i<arr.length; i++){
//     console.log( "the value at index ",i, "is ",arr[i]);
// }
// console.log();
// Average Calculation
// let num = [23,78,55,89,20,80]
// let sum = 0;
// let totalVal = num.length  
// for(let i=0; i<num.length; i++){
//  sum = sum + num[i];

// }
// console.log(sum);
// console.log(sum/totalVal);

// let item = [250, 645,600, 900,50]
// for(let i=0; i<item.length; i++){
//     let offer = item[i] /10;
//     item[i] -=offer;
//      console.log(item[i]);
//    let value = item[i];
//    let offer = value /10;
//     value = value -offer;
//     console.log("the price after discount  ",item[i],"to",value);

// let foodItems = ["potato", "orange", "burger", "litchi","apple"];
// let names = ["ali", "raza","amanat","haji"];
// console.log(foodItems.splice(2,1,"parrot", "sparrow"));


// let companies= ["Bloomberg","Microsoft", "Uber","Google","IBM","Netflix"];
 
// console.log(companies.splice(2,1,"Ola"));

// function KE(m,v){
    
//    console.log(`Kinetic energy will be ${(m*v)/2}`);
   
    

// }
// KE(8,4);

// let str ;

// function countVowels (str){
//     let count =0;
//     for(let char of str){
//     if (char =="a" || char == "e" || char =="i" || char =="o"|| char =="u"){
    
//         count++;

//     }
// }
// console.log(count);
// };

// countVowels("aliraza");

// function cV (str){
//     let count =0;
//  for (let i=0; i<str.length; i++){
//     let ch = str[i];
//     if(ch=="a"|| ch=="e"|| ch=="i"|| ch=="o"|| ch=="u"){
//         count++;
//     }
//  }
//  console.log(count);
// };
// cV("ali");

// const  countVowels =(str)=>{
//     let count =0;
//     for (let i=0; i<str.length; i++){
//         let ch = str[i];
        
//         if(ch=="a"|| ch=="e"||ch=="e"){
//             count++;
//         }
//     }
//     console.log(count);
// };

// forEach loop in arrays in Javascript
// let arr = [1,2,3,4];
// arr.forEach(function printVal (val){
//     console.log(val*val);
// });

// arr.forEach(printVal =(val)=>{
//     console.log(val);
// });


//   Map methood
// let arr = [2,3,4,5,6,7];
//  let newArr = arr.map((val)=>{
//     return val;
// })
// console.log(newArr);

//  Reduce Method  

// let arr = [1,2,3,4,5,6,7,8,9,10]
//  let filterArr = arr.filter((val) =>{
//     return val %2 ===0;
//  })
// console.log(filterArr);


//      Reduce Method
// let arr = [1,2,3,4,5];
//  let output = arr.reduce((result,curr)=>{
//     return (result + curr)/2;
//  })
//  console.log(output);
 // Filter the greatest and smallest value by using arrow function
// let arr = [2,3,6,8,9,4];
 
//  let output =arr.reduce((previous, curr)=>{
//    return previous >curr ? previous : curr;
// })
// console.log(output);

// let marks= [83,94,61,50,99,100];
 
//  let topMarks =marks.filter((val)=>{
//    return val > 90 ;
// });
// console.log(topMarks);

// let n = prompt("Enter the numbers : ");
// let arr = [];
// let i;
// for (let i=1; i<=n; i++){
   
//    arr[i-1] =i;
// }
// let prodArr=arr.reduce ((pre,curr)=>{
//    return pre*curr;
// })
// console.log(prodArr);
// console.log(arr);
//  let newArr= arr.reduce ((prev, curr)=>{
//    return prev + curr;
// })
// console.log(newArr)
//  let heading =document.getElementById("heading");
// console.dir(heading);
// let cl = document.getElementsByClassName("heading_class");
// console.dir(cl);
// let para = document.getElementsByTagName("button");
// console.dir(para);

// let header =document.querySelector("h1");
// console.dir(header);
// header.innerText;
// header.innerText = header.innerText + " form  apna college";
// let direct =document.querySelectorAll(".box");
// console.dir (direct);
// direct[1].innerHTML = "new value reached ";

// How to add New element without using Html file and using javascript file 

//  let newBtn = document.createElement("button");
//  newBtn.innerText = "Click me!";
//  newBtn.style.backgroundColor="yellow";
//  console.log(newBtn);
// let div = document.querySelector("div");
// div.append(newBtn);
// console.log(div);

// let heading = document.createElement("h1");
// heading.innerHTML= "<i>Hi I am newComer in Javascricpt</i>";
// heading.style.backgroundColor="yellow";
// console.log("heading");

// let div=document.querySelector("div");
// div.after(heading);
// console.log(div);
// let button=document.createElement("button");
// button.innerText="Click me!";
// button.style.backgroundColor="red";
// button.style.color="white";
// let body=document.querySelector("body").prepend(button);

// console.log(body);

// let btn =document.querySelector(".btn");
// btn.onclick=()=>{
//     console.log("botton was clicked recently");
// };
// let box = document.querySelector("div");
// box.onmouseenter=(evt)=>{
//     console.log(evt.clientX);
//     console.log(evt);
// };

let btn = document.querySelector("button");
// btn.addEventListener("click" , (Evt)=>{
//     console.log("button was clickd , handler 1 ");
    
// });
// let box = document.querySelector("div");
// box.addEventListener( 'mouseover', ()=>{
//     console.log("we are inside the div");
// })

// btn.addEventListener("click" , (Evt)=>{
//     console.log("button was clickd , handler 1 ");
// });

// btn.addEventListener("click" , (Evt)=>{
//     console.log("button was clickd , handler 2 ");
// });


//  const handler3=(Evt)=>{
//     console.log("button was clickd , handler 3 ");
// };
// btn.addEventListener("click" , handler3);


// btn.addEventListener("click" , (Evt)=>{
//     console.log("button was clickd , handler 4 ");
// });

// btn.removeEventListener("click" , handler3);


let modeBtn = document.querySelector("#mode");
let bdy = document.querySelector("#bdy");
let currMode = "light";
modeBtn.addEventListener("click", ()=>{
    if(currMode == "light"){
        currMode = "dark";
        bdy.style.backgroundColor="black";
        // document.querySelector("body").style.backgroundColor="black";
    }
    else {
        currMode = "light";
        // document.querySelector("body").style.backgroundColor="white";
        bdy.style.backgroundColor="white";
    }
    console.log(currMode);
});