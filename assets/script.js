const menuIcon = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});