let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r}, ${g}, ${b})`;

    h3.innerText = color;
    div.style.backgroundColor = color;
});
