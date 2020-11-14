//T2
console.log("Kharandyuk");
//T3
let first = "first"
let second = "second";
alert("first variable has value:" + first);
alert("second variable has value:" + second);
first = second;
alert("But now first variable has value:" + first);
alert("and second variable has value:" + second);
//T4
let firstObject = {
    _string: "This is string", 
    _number: 1,
    _boolean: false,
    _undefined:undefined,
    _null: null
 };
 //console.log(firstObject);
 //T5
 let isAdult = confirm("Are you mature enough?")
 console.log(isAdult);
 
 //T6
 let name = "Yuriy";
 let surname = "Kharandyuk";
 let group = "Lv-548";
 let birthYear = 1982;
 let isMarried = true;
 console.log(typeof name);
 console.log(typeof surname);
 console.log(typeof group);
 console.log(typeof birthYear);
 console.log(typeof isMarried);
 console.log(birthYear);
 console.log(isMarried);
 console.log(name);
 console.log(surname);
 console.log(group);
 let _null = null;
 let _undefined;
 console.log(typeof _null);
 console.log(typeof _undefined);
 
 //T7
 let login = prompt("Please enter your login", "");
 let email = prompt("Please enter your email", "");
 let pwd = prompt("Please enter your password", "");
 alert("Dear "+login+", your email is "+ email+", your password is "+pwd);
 
 //T8
 let hour = 60*60;
 let day = 24*hour;
 let month = 30*day;
 console.log(hour);
 console.log(day);
 console.log(month);
