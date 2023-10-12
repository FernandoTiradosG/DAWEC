function addItemToList() {
    const input = document.getElementById("inputField").value;
    
    if (input !== "") {
      const listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(input));
      
      const list = document.getElementById("list");
      list.appendChild(listItem);
      
      document.getElementById("inputField").value = "";
    }
}

function resetList() {
    const list = document.getElementById("list");
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
}