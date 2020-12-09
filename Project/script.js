function allowDrop(ev) {
    ev.preventDefault();  // default is not to allow drop
  }
  function dragStart(ev) {
    // The 'text/plain' is referring the Data Type (DOMString) 
    // of the Object being dragged.
    // ev.target.id is the id of the Object being dragged
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
  
    // Compare List names to see if we are going between lists
    // or within the same list
    if (targetParentEl.id!==sourceIdParentEl.id){
// If the source and destination have the same 
        // className (card), then we risk dropping a Card in to a Card
        // That may be a cool feature, but not for us!
        if (targetEl.className === sourceIdEl.className ){
          // Append to parent Object (list), not to a 
          // Card in the list
          // This is in case you drag and drop a Card on top 
          // of a Card in a different list
           targetParentEl.appendChild(sourceIdEl);
         
        }else{
            // Append to the list
             targetEl.appendChild(sourceIdEl);
           
        }
       
    }else{
        // Same list. Swap the text of the two cards
        // Just like swapping the values in two variables
      
        // Temporary holder of the destination Object
        let holder=targetEl;
        // The text of the destination Object. 
        // We are really just moving the text, not the Card
        let holderText=holder.textContent;
        // Replace the destination Objects text with the sources text
        targetEl.textContent=sourceIdEl.textContent;
        // Replace the sources text with the original destinations
        sourceIdEl.textContent=holderText;
        holderText='';
    }
    
}
function openCard() {
    
    //console.log(currentCard.trim());
   
    modalMsg.innerHTML = this.innerHTML;
    modal.style.display = "block";

}
function addCard() {
    //console.log("lets add a card");
     addElement.insertAdjacentHTML('beforebegin', `
     <div id='newCard' class="card" draggable="true" ondragstart="dragStart(event)">
     type description here
     </div>
   `);  
   init();
  }
function init() {
    
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
let modalMsg = document.getElementById("modalMsg")
let addElement = document.getElementById("add");
function init(){
let cards = document.getElementsByClassName("card");
for(let i=0; i < cards.length; i++ ){
    cards[i].addEventListener("click",openCard);
}

}
addElement.addEventListener("click",addCard);
init();