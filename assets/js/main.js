const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    const navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}
