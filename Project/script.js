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
    let targetParentEl=targetEl.parentElement;
  
   
    if (targetParentEl.id!==sourceIdParentEl.id){

        if (targetEl.className === sourceIdEl.className ){
          
           targetParentEl.appendChild(sourceIdEl);
         
        }else{
            
             targetEl.appendChild(sourceIdEl);
           
        }
       
    }else{
        
        let holder=targetEl;
        
        let holderText=holder.textContent;
        
        targetEl.textContent=sourceIdEl.textContent;
       
        sourceIdEl.textContent=holderText;
        holderText='';
    }
    
}
function openCard() {
    
    //console.log(currentCard.trim());
   
    modalMsg.innerHTML = this.querySelector("h3").innerHTML;
    modalBody.innerHTML = this.querySelector("p").innerHTML;
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
  }
function addConent() {
   
    this.parentNode.insertAdjacentHTML('beforebegin', `
      <div id='` + (lastCardId+1) + `' class="card" draggable="true" ondragstart="dragStart(event)"><h3>`+ this.parentNode.querySelector("input").value +
      
      ` </h3><p class="cardContent" style="display: none;">hidden text</p>
      </div>
    `); 
    
    this.parentNode.insertAdjacentHTML('beforebegin', `
        <div id='add' class="addcard" draggable="false" >
    
        <img class="icon" id="icon" style="display: inline;" src="img/cross.png">
        <input type="hidden" class="input" id="input" placeholder="Write a title for your card..." > 
        <button class="addbutton" id="addbutton" style="display: none;">Add</button>
    </div>
    `); 
    this.parentNode.outerHTML = "";
    init();
   
  }
  function addComment(){

    
    document.querySelector("#modalBody").insertAdjacentHTML('beforeend', `
    <p >`+ this.parentNode.querySelector("#cardContentInput").value +
    
    ` </p>
    `); 
    document.getElementById(currentCardId).querySelector("p").insertAdjacentHTML('beforeend', `
    <p >`+ this.parentNode.querySelector("#cardContentInput").value +
    
    ` </p>
    `); 
    this.parentNode.querySelector("#cardContentInput").value = "";
  }


  function removeCard() {
    document.getElementById(currentCardId).outerHTML = "";
    modal.style.display = "none";
  }
  
////
var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
    modal.style.display = "none";
    }

window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

/////
let modalMsg = document.getElementById("modalMsg");
let modalBody = document.getElementById("modalBody");
let currentCardId ;
let lastCardId = 0;

function init(){
    let addElement = document.getElementById("add");
    let cards = document.getElementsByClassName("card");
    let recycleBin = document.getElementById("trash");
    let addCommentButton = document.getElementById("addComment");
    for(let i=0; i < cards.length; i++ ){
        cards[i].addEventListener("click",openCard);
    }
    addElement.addEventListener("click",addCard);
    recycleBin.addEventListener("click",removeCard);

    addCommentButton.addEventListener("click",addComment);
    allCards = document.querySelectorAll("div.card");
    
    for(let i= 0; i<allCards.length; i++){
     if(Number(allCards[i].id) > lastCardId){
            lastCardId = Number(allCards[i].id);
        }

    }
    
   
}

init();