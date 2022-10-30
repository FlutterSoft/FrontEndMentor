const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const overlay = document.querySelector(".grey-overlay")

// Toggles the active class on the hamburger menu and nav menu (displaying/hiding them)
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    if(hamburger.classList.contains('active')){
        // Adds the background overlay (being darkened/grayed)
        overlay.classList.remove('hidden')
        setTimeout(()=>{
            overlay.classList.remove('opaque')
        }, 10)
    }
    else{
        // Removes the background overlay (being darkened/grayed)
        overlay.classList.add('opaque')
        setTimeout(()=>{
            overlay.classList.add('hidden')
        }, 410)
    }
})

// Hides mobile menu when overlay is clicked (so clicking in the background closes the menu)
overlay.addEventListener('click', ()=>{
    hamburger.click()
})

// Adds the ability to hide the menu anytime a navigation link is clicked.
document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
        overlay.classList.add('opaque')
        setTimeout(()=>{
            overlay.classList.add('hidden')
        }, 410)
    })
})