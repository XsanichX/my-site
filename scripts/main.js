alert("Слава Україні!");

/*var prikol = document.querySelector("img");
prikol.onclick = function() {
    alert("Дяб Дяб Дяб ДЯб яяя");
};*/

var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/male.png") {
        myImage.setAttribute("src", "images/piss.png");
} else {
    myImage.setAttribute("src", "images/male.png");
}
}; 

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Будь ласка, введіть своє ім'я:");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Male Multiple Tablets, 60 Tablets For you, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName ();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Male Multiple Tablets, 60 Tablets For you, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};