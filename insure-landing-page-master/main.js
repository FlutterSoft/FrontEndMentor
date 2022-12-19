
const $ = document.querySelector.bind( document );const hamburger = $('.hamburger')
const nav = $('.main-nav')
const body = $('body')
const navLinks = document.querySelectorAll('.nav-link')


hamburger.addEventListener('click', toggleNav )

function toggleNav(){
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
        body.classList.remove('position-fixed')

        
    }
    else{
        nav.classList.remove('hidden')
        nav.classList.add('active')
        body.classList.add('position-fixed')

    }
}
navLinks.forEach(link => {
    link.addEventListener('click', toggleNav)

})