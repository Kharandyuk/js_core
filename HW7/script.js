//T1
let newWindow = window.open("", "test", "width=300,height=300");

setTimeout('newWindow.resizeTo(500,500)', 2000);
setTimeout('newWindow.resizeTo(200,200)', 4000);
setTimeout('newWindow.moveTo(200,200)', 6000);
setTimeout('newWindow.close()', 10000);


//T2
 function changeCSS (){
    
   let _p =  document.getElementById('text');
   _p.style.color = "orange";
   _p.style.fontFamily = "Comic Sans MS";
}
let btn = document.getElementById("myBtn");
         btn.addEventListener("click",changeCSS);
