// nav-mediaquerys
var navbutton = document.getElementById("nav-button");
var navbuttonclose = document.getElementById("nav-buttonclose")
var nav = document.getElementById("nav-mediaquerys");

navbutton.addEventListener("click", () => nav.classList.add("nav-mediaquerys--show"))
navbuttonclose.addEventListener("click", () => nav.classList.remove("nav-mediaquerys--show"))
nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-mediaquerys")) nav.classList.remove("nav-mediaquerys--show")
})