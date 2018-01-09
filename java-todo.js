

//Create new list item on clicking Button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert("Please  ADD a Task.");
    }
    else {
        document.getElementById("listItems").appendChild(li);
    }
}

//
var list = document.getElementsByTagName('li');
var result = doucment.addEventListener('click',list.strike());


