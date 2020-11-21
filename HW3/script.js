//T1
let numbers = [2, 3, 4, 5]; 
let result = 1;

for(let i=0; i< numbers.length; i++){
    
    result *= numbers[i]
}
console.log(result);

result = 1;
i=0;
while (i< numbers.length){
    
    result *= numbers[i];
    i++;
}
console.log(result);
//T2
for(let i=0; i<= 15; i++){
    if (i%2 ==0){
        console.log(i+" is  even"); }
    else console.log(i+" is  odd"); 
}

//T3
function randArray(k){
    let resultArray = new Array();
  for (let i=0; i<k; i++){
    resultArray[i] = parseInt(Math.random()*500);
  }  
  return resultArray;
}
console.log(randArray(5));

//T4

function raiseToDegree(a,b){
    if(isNaN(a)||isNaN(b)){
        throw "We've got not a number as a parameter!"
    }
    return a**b;

}
let a = Number(prompt("Please enter first number",""));
let b = Number(prompt("Please enter second number",""));
console.log(raiseToDegree(a, b));


//T5
function findMin(){
    if(arguments.length ==0){
    throw "We need at least one argument to find minimal"

    }
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if(arguments[i]<result)    {
            result = arguments[i];
        }  
        
    }
 return result;
}
console.log(findMin(12, 14, 4, -4, 0.2));
console.log(findMin("12", 14, 4, -4, "-40"));

//T6
function findUnique(arr){
    if(arr.length == 0){
        throw "There is no arguments"
            }
   let result =true;
    for (let i = 0; (i < arr.length && result == true); i++) {
        if(arr.lastIndexOf(arr[i]) != i)    {
           result = false;
        }  

        
    }
    return result;
}
console.log(findUnique([1, 2, 3, 5, 3]));  
console.log(findUnique([1, 2, 3, 5, 11])); 

//T7
function lastElem(arr, x){

    let resultArray = new Array(); 
    if (x>arr.length){
        x = arr.length;
    }
    if (x == undefined){
        resultArray = arr[arr.length -1];
    }else{
        for(let i=0; i<x; i++ ){
            resultArray[i]= arr[arr.length -x +i]        }

    }

return resultArray
}
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

//T8
function firstCharToUpper(str){

    var res = str.split(" ");
    for(let i=0; i < res.length; i++){
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1)
    }
    return res.join(' ');
}
console.log(firstCharToUpper('i love java script')); 
console.log(firstCharToUpper('i love java - script !!!')); 