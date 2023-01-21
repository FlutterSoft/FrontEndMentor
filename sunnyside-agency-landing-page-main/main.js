const hamburger = document.querySelector(".hamburger-btn")
const mobileMenu = document.querySelector(".nav-list")

const navLinks = document.querySelectorAll('.nav-link')

// Add nav toggle to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', toggleNav)
})

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

function checkSize(){
    if(window.innerWidth >= 650){
        mobileMenu.classList.remove('menu-closed')
    }

}

window.onresize = checkSize

if(window.innerWidth >= 650){
    mobileMenu.classList.remove('menu-closed')
}