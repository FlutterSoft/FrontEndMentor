const $ = document.querySelector.bind( document )
const hamburger = $('.hamburger')
const nav = $('.main-nav')
const body = $('body')
const navLinks = document.querySelectorAll('.nav-link')

// Add function on click of hamburger icon
hamburger.addEventListener('click', toggleNav )

// Shows the mobile nav menu when hamburger is clicked (Only applies to screen size less than 650px as this is break point)
function toggleNav(){
    if(window.innerWidth <= 650){
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
}
// Add nav toggle to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', toggleNav)
})