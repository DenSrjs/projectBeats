
const btnMenu = document.querySelector(".gamburger-menu")
const menu = document.querySelector(".screen-menu")

btnMenu.addEventListener('click', function(){
    menu.classList.add('active')
})

const close = document.querySelector(".close")

close.addEventListener('click', function(){
    menu.style.display = 'none'
})

