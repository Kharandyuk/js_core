//T7

let _main = document.createElement("main"); 
_main.className = "mainClass check item";

let _div = document.createElement("div"); 
_div.id = "myDiv";

let p = document.createElement("p"); 
let t = document.createTextNode("First paragraph"); 

p.appendChild(t);
_div.appendChild(p);
_main.appendChild(_div);

document.body.appendChild(_main);
