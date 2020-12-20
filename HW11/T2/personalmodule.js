const os = require('os');

exports.customGreeting = function () {
    let todayDate = new Date();
    let currentHour = parseInt(todayDate.getHours());
    switch(true) {  
        case((currentHour>= 5)&&(currentHour< 11)):   
        return "Good morning, "+os.userInfo().username;  
         
    
        case ((currentHour>= 11)&&(currentHour< 17)):    
        return "Good afternoon, "+os.userInfo().username;  
        
        case ((currentHour>= 17)&&(currentHour< 23)):    
        return "Good evening, "+os.userInfo().username;
    
        default:   
        return "Good night, "+os.userInfo().username; 
    } 
}


exports.myDateTime = function () {
        return (new Date()).toString().replace(/\(.*$/g,'');
  };