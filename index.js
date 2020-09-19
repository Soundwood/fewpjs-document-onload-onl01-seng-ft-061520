// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    modifyText()
});

function modifyText() {
    document.getElementById("text").innerHTML = "This is really cool!"
}