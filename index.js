var enterButton = document.getElementById('submit');
var input = document.getElementById('todoInput');
var ul = document.getElementById('todo-ul');
var item = document.getElementsByClassName('todo-li');

function lengthOfInput(){
	return input.value.length;
} 

function lengthOfList(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); 
	li.classList.add("todo-li");
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 

	function toggleCompleted() {
		li.classList.toggle('completed');
	}

	li.addEventListener("dblclick",toggleCompleted);


	var dBtn = document.createElement("button");
	dBtn.classList.add("delete-button");
	dBtn.appendChild(document.createTextNode("DELETE"));
	li.appendChild(dBtn);
	dBtn.addEventListener("dblclick", deleteTodoItem);


	function deleteTodoItem(){
		li.classList.add("delete")
	}
	
}


function addListAfterClick(){
	if (lengthOfInput() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (lengthOfInput() > 0 && event.which ===13) { 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

