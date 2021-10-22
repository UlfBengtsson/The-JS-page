"use strict";

document.getElementsByTagName("body")[0].style.backgroundColor = "lightgoldenrodyellow";
var boxContainer = document.getElementById("boxContainer");
var navLinks = document.getElementsByClassName("navLink");
var boxCounter = 0;

//tic-tac-toe related varibles
var ticTacToeGameActive = false;
var playerX_Turn = true;

//end

for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].innerHTML = "Link " + (index + 1);
}

document.getElementById("tictactoe").addEventListener("click", () => createTicTacToe());

function resetBoxContainerAndBoxCounter() {
    boxContainer.innerHTML = "";//clears out other boxes before setting up the Tic-Tac-Toe board.
    boxCounter = 0;
}

function makeBox(boxColor) {
    console.log("makeBox stated");

    let myBox = document.createElement("div");
    myBox.id = 'box' + ++boxCounter;
    myBox.className = "box";//edit class'es on the element as if it was a string, so here it will replace the old string with a new one.
    myBox.classList.add(boxColor);

    if (ticTacToeGameActive) {
        myBox.addEventListener('click', function (event) {
            console.log(event);
            let playerSymbol = '<h1>' + (playerX_Turn ? "X" : "O") + '</h1>';
            event.target.innerHTML = playerSymbol;
            playerX_Turn = !playerX_Turn;
        })
    }

    boxContainer.appendChild(myBox);
    console.log("Box added", myBox);
}

function createTicTacToe() {

    resetBoxContainerAndBoxCounter();

    let boxWidth = 50;//px
    let boxHeight = 50;//px
    let boxBorderTotal = 4;//px

    boxContainer.style.width = (boxWidth + boxBorderTotal) * 3 + 'px';

    boxContainer.style.marginLeft = 'auto';
    boxContainer.style.marginRight = 'auto';

    ticTacToeGameActive = true;

    let toggleColor = false;

    for (let index = 0; index < 9; index++) {

        if (toggleColor) {
            makeBox("boxWhite");
        }
        else {
            makeBox("boxBlack");
        }
        toggleColor = !toggleColor;
    }

}

//makeBox();

/*alert(
    "beware of alert might stop other js code from running until its closed!"
);*/
//document.write("<p>lets see where write places this text</p>");