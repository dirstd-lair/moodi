const active_burger = document.getElementsByClassName("burger-menu")
const noactive_burger = document.getElementsByClassName("burger-menu-close")



active_burger[0].addEventListener('click', function() {
    
    const block_container_menu = document.getElementsByClassName("burger-menu-block")
    block_container_menu[0].style.display = "flex"
    block_container_menu[0].style.animation = "svipe-container-menu-active 0.6s forwards"
})

noactive_burger[0].addEventListener('click', function() {
    const block_container_menu = document.getElementsByClassName("burger-menu-block")
    block_container_menu[0].style.animation = "svipe-container-menu-noactive 0.6s forwards"
})


setInterval(function() {
    const block_container_menu = document.getElementsByClassName("burger-menu-block")
    if (window.innerWidth > 767) {
        block_container_menu[0].style.animation = "svipe-container-menu-noactive 0.6s forwards"
    }  
}, 100)