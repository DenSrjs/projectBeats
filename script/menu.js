
const btnMenu = document.querySelector(".gamburger-menu")
const menu = document.querySelector(".screen-menu")
const close = document.querySelector(".close")

btnMenu.addEventListener('click', function(){
    menu.classList.add('active')
})

close.addEventListener('click', function(){
    menu.classList.remove('active')
})

