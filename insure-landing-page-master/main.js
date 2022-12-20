
const $ = document.querySelector.bind( document )
const hamburger = $('.hamburger')
const nav = $('.main-nav')
const body = $('body')
const navLinks = document.querySelectorAll('.nav-link')


hamburger.addEventListener('click', toggleNav )

function toggleNav(){
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
        body.classList.remove('position-fixed')
        hamburger.src=("./images/icon-hamburger.svg")

    }
    else{
        nav.classList.remove('hidden')
        nav.classList.add('active')
        body.classList.add('position-fixed')
        hamburger.src=("./images/icon-close.svg")
    }
}
navLinks.forEach(link => {
    link.addEventListener('click', toggleNav)

})