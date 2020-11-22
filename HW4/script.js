//T1
function testThrow(exception) {
  try{
        throw exception;
     } catch(error){
         console.log("Caught: " + error);
     } 
    
}

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));
    
//T2
function  calcRectangleArea(width, lenght){
  if (isNaN(width)||isNaN(lenght)){
              throw "Parameter is not a number";  
          }
      return width * lenght; 
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
            throw "The field is empty! Please enter your age";
        } else if (isNaN(Number(ageValue))){
            throw  "The field is not a number";
        } else if(ageValue < 14){
            throw "You are too young"; 
            
        } else if (ageValue >= 14){
            document.getElementById("myVideo").style.visibility = 'visible';        
        } 
    } catch(error){
        msg = error;
    } 

  if(msg){
    modal.style.display = "block";
    document.getElementById("msg").innerHTML = msg;
  }
 
}

  //T4

class MonthException {
  constructor(message) {
    this.name = message;
    
  }
}

function showMonthName(month) {
    try{
            if(isNaN(month)){
                throw "Not a number as a parameter";
            } else if(month > 12 || month < 1){
                throw "Incorrect month number";     
            } else {
                return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month - 1];
            }
        } catch(error){
            return new MonthException(error);
        }
    
}

console.log(showMonthName(5)); 
console.log(showMonthName(14)); 

//T5
function showUser(id){
    if (id < 0 ){
        throw "Error: ID must not be negative: " + id;
    }else {
    return { id: id};
    }
}

function showUsers(idArray){
  let result = new Array();

   for ( let i in idArray) { 
       
        try{
            result.push(showUser(idArray[i]));
        }catch(error){
            console.log(error); 
        }
    } 
    
    return result;
}

console.log(showUsers([7, -12, 44, 22])); 