// function toggleMenu() {
//     const menu = document.querySelector(".nav-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }

document.querySelector('.hamburger-icon').addEventListener('click', function() {
    document.querySelector(".flex1").classList.toggle('hidden')
})