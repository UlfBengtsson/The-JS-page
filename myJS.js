"use strict";

document.getElementsByTagName("body")[0].style.backgroundColor = "lightgoldenrodyellow";
var boxContainer = document.getElementById("boxContainer");
var navLinks = document.getElementsByClassName("navLink");

for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].innerHTML = "Link " + (index + 1);
}

document.getElementById("tictactoe").addEventListener("click", () => createTicTacToe());


function makeBox(boxColor) {
    console.log("makeBox stated");

    let myBox = document.createElement("div");
    myBox.className = "box";
    myBox.classList.add(boxColor);

    boxContainer.appendChild(myBox);
    console.log("Box added", myBox);
}

function createTicTacToe() {

    boxContainer.style.width = '150px';

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