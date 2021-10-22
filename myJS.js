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

    let myBox = document.createElement("div");
    myBox.id = 'box' + ++boxCounter;
    myBox.className = "box";//edit class'es on the element as if it was a string, so here it will replace the old string with a new one.
    myBox.classList.add(boxColor);

    boxContainer.appendChild(myBox);

    return myBox;
}

function placeMaker(boxId) {
    console.log(boxId);
    let playerSymbol = '<h1>' + (playerX_Turn ? "X" : "O") + '</h1>';
    document.getElementById(boxId).innerHTML = playerSymbol;
    playerX_Turn = !playerX_Turn;
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
        let myBox;
        if (toggleColor) {
            myBox = makeBox("boxWhite");
        }
        else {
            myBox = makeBox("boxBlack");
        }
        toggleColor = !toggleColor;
        myBox.addEventListener('click', () => placeMaker(myBox.id));
    }
}

//makeBox();

/*alert(
    "beware of alert might stop other js code from running until its closed!"
);*/
//document.write("<p>lets see where write places this text</p>");