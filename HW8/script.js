//T1
function upperCase (str){
    
   if(/[A-Z]/.test(str) ){
      console.log("String's starts with uppercase character");
   }else console.log("String's not starts with uppercase character");
}
upperCase('regexp');
upperCase('RegExp');

//T2
function checkEmail (str){
   result = /\S+@\S+\.\S+/.test(str); 
   console.log(result);
}
checkEmail("Qmail-2@gmail.com")
checkEmail("@gmail.com")



//T5

function swapString (str){

   let result = str.match(/\s(.*)/)[0] +  ", " + str.match(/^(\S+)/)[0];
   //let result =  str.match(/\s(.*)/).slice(1);
   console.log(result);
}

swapString ("Java Script");

//T6
function is_creditCard(str)
{
   str = str.replace(/-/g, '');
   
   regexp = /^[0-9]{16}$/;
   return regexp.test(str);
  
          
}
console.log(is_creditCard("9999-9999-9999-9999"))


//T7

function checkFullEmail (str){
   //let body = str.match(/^[\w-\.]@/)[0];
   //let result = /^[^-_][\w-]+@\w+\.\w+$/.test(str);
   //let reg = new RegExp('^[^-_]([\w]+[-]{1})*[\w]+@\w+\.\w+$');
   let result = /^[^-_]([\w]+[-]{1})*[\w]+@\w+\.\w+$/.test(str);

   console.log(result);
}

checkFullEmail("tt@gmail.com")
checkFullEmail("t--t@gmail.com")
checkFullEmail("-t@gmail.com")
checkFullEmail("_test@gmail.com")