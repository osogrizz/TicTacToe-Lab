// ensures I load my js to page n.b. window.onload = start.
function start() {
// grabs my table cells/boxes and loops while listening for 'click' event.
var box = document.getElementsByTagName("td");
for (var i = 0; i < box.length; i++) {
	box[i].addEventListener("click", clickBox);	
	}
};
// determines the value of my event.taget ,if empty "" .
// If so then innerHTML = cuurent turn value.
// Last switchTurn runs and switches the value. 
function clickBox(event) {
	if (event.target.innerText === "" ) {	
	event.target.innerHTML = turn;
	switchTurn();
  }
};
// function that alternates my content ie "X" and "O".
// Needs var turn, which is a global variable to work. 
// Also handles my player turn notification.

function switchTurn() {
	var playerBoxX = document.getElementById("playerX");
    var playerBoxO = document.getElementById("playerO");
	if (turn === "X") {
		turn="O"; 
		playerBoxO.style.visibility = "visible";
		playerBoxX.style.visibility = "hidden";
	} else {
		turn = "X";
		playerBoxX.style.visibility = "visible";
		playerBoxO.style.visibility = "hidden";
	}
}


// global var for event.target content.
var turn = "X";

// Player turn



// Option to rset the game/page at any time.Do I need



// I need a way to determine if a player has won!

// function winner () {
// 	if () {
// 		player = "X wins!";
// 	}  else {
// 		player = "O wins!"
// 	}
// }


// var eigthFoldPath = ["box1","box2","box3"], ["box4",]



window.onload = start;