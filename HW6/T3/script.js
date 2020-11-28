//T3
let elementsArray = document.querySelectorAll("div > p"); 
elementsArray.forEach(function(item, i) {
    console.log("Selector text " + i + ": " + item.innerHTML);
  });