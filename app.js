
function start() {
var box = document.getElementsByTagName("td");
for (var i = 0; i < box.length; i++) {
	box[i].addEventListener("click", clickBox);	
}
};

function clickBox(event) {
	if (event.target.innerText === "" ) {	
	event.target.innerHTML = turn;
	switchTurn();
  }
};

function switchTurn() {
	if (turn === "x") {
		turn="o"; 
	} else {
		turn = "x";
	}
}


var turn = "x";






window.onload = start;