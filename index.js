let button = document.getElementById("shareButton");
let display = document.getElementById("shareBlock");
let clicked = false;

button.addEventListener("click", function() {
    clicked = !clicked; 
    if(clicked) {
        display.style.display = "flex";
    } else {
        display.style.display = "none";
    }
});
