const menu = document.querySelector(".icon-menu")
const door = document.querySelector(".nav")
const close = document.querySelector(".close-icon")

function openMenu (){
door.classList.add("nav");
door.classList.remove("menu")

}

function closeMenu (){
    door.classList.add("menu")
    close.classList.remove("close-icon")
}


menu.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)