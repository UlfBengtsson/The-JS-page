"use strict";

document.getElementsByTagName("body")[0].style.backgroundColor = "lightgoldenrodyellow";

var navLinks = document.getElementsByClassName("navLink");

for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].innerHTML = "Link " + (index + 1);
}

function makeBox() {
    console.log("makeBox stated");

    let myBox = document.createElement("div");
    myBox.className = "box";
    document.getElementById("boxContainer").appendChild(myBox);
    console.log("Box added", myBox);
}

//makeBox();

/*alert(
    "beware of alert might stop other js code from running until its closed!"
);*/
//document.write("<p>lets see where write places this text</p>");