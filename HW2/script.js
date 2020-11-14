//T1
let x = 1;
let y = 2;

let res1 = "" +x+y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = "" + Boolean(x)+y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 =Boolean(x)||y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt("" + Boolean(x));// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

//T2
let num = prompt("Please enter your number", "");
if ((num>=0)&&(num%2 ==0)){
    console.log("Number "+num+" is positive and even");  
}else {console.log("Number "+num+" is NOT positive and even");  }
if (num%7 ==0){
    console.log("Number "+num+"is multiples of 7");  
}else {console.log("Number "+num+" is NOT multiples of 7");  }

//T3
let _arr = [1, "two", true, null];
alert( "Our array has " +_arr.length +"" );
_arr[4] = prompt("Please enter value of new array element", "");
alert("Fifth element of array is "+_arr[4]);
_arr.shift();
alert(_arr);

//T4
let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(cities.join('*'));

//T5
let isAdult = prompt("How old are you?", "");

if (isAdult>=18){alert("Ви досягли повнолітнього віку");}
    else if(isAdult>10){alert("Ви ще не досягли повнолітнього віку");}
            else{alert("Ви ще надто молоді");}

//T6
let a = parseFloat(prompt("please enter length of first side of triangle", ""));
let b = parseFloat(prompt("please enter length of second side of triangle", ""));
let c = parseFloat(prompt("please enter length of third side of triangle", ""));
if(isNaN(a)||isNaN(b)||isNaN(c)||(a <=0)||(b <=0)||(c <=0)){alert("Incorrect data");}
else{
    let p = (a+b+c)/2;
    let s= (p*(p - a)*(p - b)*(p - c))** (1/2);
    console.log("Square of the triange is: "+s.toFixed(3));    
}
if((a**2 + b**2 == c**2)||(a**2 + c**2 == b**2)||(b**2 + c**2 == a**2)){console.log("you've entered right-angled triangle"); }
else {console.log("you've entered NOT right-angled triangle");}

//T7
let todayDate = new Date();
let currentHour = parseInt(todayDate.getHours());

if((currentHour>= 5)&&(currentHour< 11)){console.log("Доброго ранку!"); }
else if((currentHour>= 11)&&(currentHour< 17)){console.log("Доброго дня!");} 
    else if((currentHour>= 17)&&(currentHour< 23)){console.log("Доброго вечора!");}
        else {console.log("Доброї ночі!");}


