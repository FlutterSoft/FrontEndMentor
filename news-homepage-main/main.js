const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const overlay = document.querySelector(".grey-overlay")


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    if(hamburger.classList.contains('active')){
        overlay.classList.remove('hidden')
        setTimeout(()=>{
            overlay.classList.remove('opaque')
        }, 10)

    }
    else{
        overlay.classList.add('opaque')
        setTimeout(()=>{
            overlay.classList.add('hidden')
        }, 410)
    }
})

overlay.addEventListener('click', ()=>{
    hamburger.click()

})


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