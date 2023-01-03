const hamburger = document.querySelector(".hamburger-btn")
const mobileMenu = document.querySelector(".nav-list")

hamburger.addEventListener('click', toggleNav)



function toggleNav(){
    if(window.innerWidth <= 650){
        if(mobileMenu.classList.contains('menu-closed')){
            mobileMenu.classList.remove('menu-closed')
        }
        else{
            mobileMenu.classList.add('menu-closed')
        }
    }
}