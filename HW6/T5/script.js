//T5
function doFormat () {
  let bigHeader = document.getElementsByTagName("h1")[0];
  bigHeader.style.background = "green";
  let paragraphs = document.querySelectorAll("div > p");
  paragraphs[0].style.fontWeight = "bold";
  paragraphs[1].style.color = "red";
  paragraphs[2].style.textDecoration  = "underline";
  paragraphs[3].style.fontStyle  = "italic";
  
  let list = document.querySelectorAll("ul > li");
  let joinList = "";
  for (let i in list){
    if(list[i].innerHTML != undefined){
      joinList += list[i].innerHTML;
    }
  }
  document.getElementById('myList').innerHTML =   joinList;
  let span = document.getElementsByTagName("span")[0];
  span.style.visibility="hidden";
}