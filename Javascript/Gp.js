// CLICK EVENT
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Button clicked ");
});

// HOVER EVENT
let box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "red";
});

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "lightblue";
});

// KEYBOARD EVENT
let input = document.getElementById("input");

input.addEventListener("keydown", function (e) {
    console.log("Key pressed:", e.key);
});
