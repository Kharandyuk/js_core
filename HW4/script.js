//T1
function testThrow(exception) {
       try{
        throw exception;
     } catch(error){
         console.log("Caught: "+ error);
     } 
    
}
testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));
    
//T2
function  calcRectangleArea(a,b){

if (isNaN(a)||isNaN(b)){
            throw "Parameter is not a number";  
        }
       return a*b; 
}
 try{
    console.log(calcRectangleArea(2,"rytw")); 
 } catch(error){
     console.log("Caught: "+ error);
 } 

 //T3
 
 function checkAge() {

  let ageValue = document.getElementById('age').value;  
  let msg;
  
  try{
        if (!ageValue){
            msg = "The field is empty! Please enter your age";
        } else if (isNaN(Number(ageValue))){
            msg = "The field is not a number";
        } else if(ageValue> 14 ){
            
            document.getElementById("myVideo").style.visibility = 'visible';
        } else if (ageValue < 14 ){
            msg = "You are too young";       
        } 
    } catch(error){
        console.log("Caught: "+ error);
    } 

if(msg){
 modal.style.display = "block";
 document.getElementById("msg").innerHTML = msg;
}
 //"The field is empty! Please enter your age";
 }
 

