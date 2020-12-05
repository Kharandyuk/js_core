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
   let result = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
   console.log(result);
}
checkEmail("Qmail2@gmail.com")
checkEmail("@gmail.com")
