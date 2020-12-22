


function allowDrop(ev) {
    ev.preventDefault();  // default is not to allow drop
  }
function dragStart(ev) {
   
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }
function dropIt(ev) {
    ev.preventDefault();  // default is not to allow drop
    let sourceId = ev.dataTransfer.getData("text/plain");
    let sourceIdEl=document.getElementById(sourceId);
    let sourceIdParentEl=sourceIdEl.parentElement;
    // ev.target.id here is the id of target Object of the drop
    let targetEl=document.getElementById(ev.target.id)
    if(targetEl.className ==="cardHeader"){
        targetEl = targetEl.parentElement
    }
    let targetParentEl=targetEl.parentElement;
    
   
    if (targetParentEl.id!==sourceIdParentEl.id){

        if ((targetEl.className === sourceIdEl.className)||(targetEl.className ==="addcard") ){
            
            targetParentEl.appendChild(sourceIdEl);
            initAddCard();
            
         
        }else{
            
             targetEl.appendChild(sourceIdEl);
             initAddCard();
           
        }
       
    }else{
        if((targetEl.className !="addcard")){
        // Same list.
        let holder=targetEl;
        
        let holderText=holder.innerHTML;
        
        targetEl.innerHTML=sourceIdEl.innerHTML;
       
        sourceIdEl.innerHTML=holderText;
        holderText="";

        }else{
            console.log("we can't play with add card");
            //initAddCard();
        }
        

    }
    saveToLocalStorage(); 
}
function openCard() {
    
    //console.log(currentCard.trim());
   
    modalMsg.innerHTML           = this.querySelector("h3").innerHTML;
    modalBody.innerHTML          = this.querySelector("div.cardContent").innerHTML;
    modalAssignedTo.innerHTML    = this.querySelector("div.assignedTo").innerHTML;
    modal.style.display = "block";
    currentCardId = this.id;

}
function addCard() {
    //console.log("lets add a card");
    this.querySelector("input").setAttribute('type','text');
    this.querySelector("button").style.display ='block';
    this.querySelector("img").style.display ='none';
    this.querySelector("button").addEventListener("click",addConent);
    
//      this.insertAdjacentHTML('beforebegin', `
//      <div id='newCard' class="card" draggable="true" ondragstart="dragStart(event)">
//      type description here
//      </div>
//    `);  
   init();
   saveToLocalStorage();
  }
function addConent() {
   if(this.parentNode.querySelector("input").value != ""){

    

    this.parentNode.insertAdjacentHTML('beforebegin', `
      <div id='${lastCardId+1}' class="card" draggable="true" ondragstart="dragStart(event)"><h3 id='${lastCardId+1}'class="cardHeader">${this.parentNode.querySelector("input").value}</h3><div class="cardContent" style="display: none;"></div><div class="assignedTo" style="display: none;"></div>
      </div>
    `); 
    
    initAddCard();
    }else {
        initAddCard(); 
    }
    saveToLocalStorage();
  }

  function addComment(){

    
    document.querySelector("#modalBody").insertAdjacentHTML('beforeend', `<pre>${new Date(Date.now()).toLocaleString()} : ${this.parentNode.querySelector("#cardContentInput").value}</pre>`); 
    document.getElementById(currentCardId).querySelector("div.cardContent").insertAdjacentHTML('beforeend', `<pre>${new Date(Date.now()).toLocaleString()} : ${this.parentNode.querySelector("#cardContentInput").value}</pre>`); 
    this.parentNode.querySelector("#cardContentInput").value = "";
    saveToLocalStorage();
  }

  function makeeditable (){
    $this = $(this);
    $this.attr('contenteditable', "true");
    $this.blur();
    $this.focus();
   }
   function makeNoteditableSave (){
    $this = $(this);
    $this.attr('contenteditable', "false");
    //console.log($this.text().trim());
    document.getElementById(currentCardId).querySelector("div.assignedTo").innerHTML = $this.text().trim();
    
   }
   function makeNoteditable (){
    $this = $(this);
    $this.attr('contenteditable', "false");

   }

  function removeCard() {
    document.getElementById(currentCardId).outerHTML = "";
    modal.style.display = "none";
    saveToLocalStorage();
  }

  function initAddCard(){
        //console.log("addCard has been initialized");
        document.getElementById("add").outerHTML = "";
        document.getElementById("list1").insertAdjacentHTML('beforeend', `
        <div id='add' class="addcard" draggable="false" >

        <img class="icon" id="icon" style="display: inline;" src="img/cross.png">
        <input type="hidden" class="input" id="input" placeholder="Write a title for your card..." > 
        <button class="addbutton" id="addbutton" style="display: none;">Add</button>
    </div>
    `); 
    init();
  }

function saveToLocalStorage(){
   

    let list1 =  window.btoa($("#list1").html()); 
    let list2 =  window.btoa($("#list2").html());
    let list3 =  window.btoa($("#list3").html());
    let list4 =  window.btoa($("#list4").html());
    let list5 =  window.btoa($("#list5").html());
      
      
      localStorage.setItem("list1", list1);
      localStorage.setItem("list2", list2);
      localStorage.setItem("list3", list3);
      localStorage.setItem("list4", list4);
      localStorage.setItem("list5", list5);

     //let clone = window.atob(localStorage.getItem("list1"));
     //document.getElementById("list3").innerHTML = "";
      //  document.getElementById("list3").insertAdjacentHTML('beforeend', `${clone}`);
}

function uploadFromLocalStorage(){
    let localList1 = localStorage.getItem("list1");
    let localList2 = localStorage.getItem("list2");
    let localList3 = localStorage.getItem("list3");
    let localList4 = localStorage.getItem("list4");
    let localList5 = localStorage.getItem("list5");
    //console.log(localList2);

    if(localList1){
        document.getElementById("list1").innerHTML = "";
        document.getElementById("list1").insertAdjacentHTML('beforeend', `${window.atob(localList1)}`);
    }

     if(localList2){
        document.getElementById("list2").innerHTML = "";
         document.getElementById("list2").insertAdjacentHTML('beforeend', `${window.atob(localList2)}`);
     }

    if(localList3){
        document.getElementById("list3").innerHTML = "";
        document.getElementById("list3").insertAdjacentHTML('beforeend', `${window.atob(localList3)}`);
    }

    if(localList4){
        document.getElementById("list4").innerHTML = "";
        document.getElementById("list4").insertAdjacentHTML('beforeend', `${window.atob(localList4)}`);
    }

    if(localList5){
        document.getElementById("list5").innerHTML = "";
        document.getElementById("list5").insertAdjacentHTML('beforeend', `${window.atob(localList5)}`);
    }
    init();
}
  
////
var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
    modalToCard();   
    modal.style.display = "none"; 
    }

window.onclick = function(event) {
        if (event.target == modal) {
            modalToCard();
            modal.style.display = "none";
        }
    }

function modalToCard() {
    document.getElementById(currentCardId).querySelector("h3.cardHeader").innerHTML = modalMsg.innerHTML;

    document.getElementById(currentCardId).querySelector("div.cardContent").innerHTML = modalBody.innerHTML;

    document.getElementById(currentCardId).querySelector("div.assignedTo").innerHTML = modalAssignedTo.innerHTML.trim();
}

/////
let modalMsg = document.getElementById("modalMsg");
let modalBody = document.getElementById("modalBody");
let modalAssignedTo = document.getElementById("assignedModal");
let currentCardId ;
let lastCardId = 0;

function init(){
    let addElement = document.getElementById("add");
    let cards = document.getElementsByClassName("card");
    let modalMessageHeader = document.getElementById("modalMsg");
    let recycleBin = document.getElementById("trash");
    let addCommentButton = document.getElementById("addComment");
    let assignedToArea = document.getElementById("assignedModal");
    for(let i=0; i < cards.length; i++ ){
        cards[i].addEventListener("click",openCard);
    }
    
    addElement.addEventListener("click",addCard);
    recycleBin.addEventListener("click",removeCard);
    assignedToArea.addEventListener("dblclick",makeeditable);
    assignedToArea.addEventListener("blur", makeNoteditableSave);
    modalMessageHeader.addEventListener("dblclick",makeeditable);
    modalMessageHeader.addEventListener("blur",makeNoteditable);
    addCommentButton.addEventListener("click",addComment);
    allCards = document.querySelectorAll("div.card");
    
    for(let i= 0; i<allCards.length; i++){
     if(Number(allCards[i].id) > lastCardId){
            lastCardId = Number(allCards[i].id);
        }

    }
    
  // 
}

init();
window.addEventListener("DOMContentLoaded", uploadFromLocalStorage);