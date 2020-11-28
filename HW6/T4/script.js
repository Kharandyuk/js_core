//T4
function doSmthFirst(){
    let list = document.getElementById("list").children;
    let msg = list[0].innerHTML + ", " + list[list.length -1].innerHTML 
    + ", " + list[1].innerHTML + ", " + list[3].innerHTML + ", " + list[2].innerHTML;
    console.log(list);
    document.getElementById("msg").innerHTML = msg;
    modal.style.display = "block";
}
function doSmthSecond(){
    let list = document.querySelectorAll("ul > li");
    let msg = list[0].innerHTML + ", " + list[list.length -1].innerHTML 
    + ", " + list[1].innerHTML + ", " + list[3].innerHTML + ", " + list[2].innerHTML;
    document.getElementById("msg").innerHTML = msg;
    modal.style.display = "block";
}