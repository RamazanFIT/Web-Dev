function createTheTask(){
    var data = document.getElementById("someTask").value;
    if((data.length) == 0){
        return;
    }
    var lineElement = document.createElement("li");
    lineElement.className="li-change";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className="checkbox-change"
    var dataData = document.createElement("p");
    dataData.textContent = data;
    dataData.className ="dataData-change";
    var delElelement = document.createElement("img");
    delElelement.className="delete-button"
    delElelement.src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
    delElelement.type="submit";
    delElelement.onclick = function(){
        lineElement.remove();
    }
    lineElement.append(checkbox);
    lineElement.append(dataData);
    lineElement.append(delElelement);
    document.getElementById("listOfTask").append(lineElement);
    document.getElementById("someTask").value = "";
}