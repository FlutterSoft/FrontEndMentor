const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const overlay = document.querySelector(".grey-overlay")
const featuresDropdown = document.querySelector("#features-dropdown")
const companyDropdown = document.querySelector("#company-dropdown")

// Open/close drop downs
featuresDropdown.addEventListener('click', function(){
    changeDropdown("features")
})

companyDropdown.addEventListener('click', function(){
    changeDropdown("company")
})

// Open/close drop downs
function changeDropdown(heading){
    let dropdown = document.querySelector("#"+heading+"-dropdown-items")
    let arrowToChange = "#"+heading+"-dropdown-arrow"
    dropdown.classList.toggle('hidden')
    if(dropdown.classList.contains('hidden')){
        document.querySelector(arrowToChange).src="./images/icon-arrow-down.svg"
    }
    else{
        document.querySelector(arrowToChange).src="./images/icon-arrow-up.svg"  
    }
}

// Close dropdowns
function closeDropdowns(heading){
    let dropdown = document.querySelector("#"+heading+"-dropdown-items")
    let arrowToChange = "#"+heading+"-dropdown-arrow"
    dropdown.classList.add('hidden')
    document.querySelector(arrowToChange).src="./images/icon-arrow-down.svg"
}


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
            closeDropdowns("features")
            closeDropdowns("company")
        }, 410)
    }
})

// Hides mobile menu when overlay is clicked (so clicking in the background closes the menu)
overlay.addEventListener('click', ()=>{
    hamburger.click()
})

// Adds the ability to hide the menu anytime a navigation link is clicked.
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
        overlay.classList.add('opaque')
        setTimeout(()=>{
            overlay.classList.add('hidden')
            closeDropdowns("features")
            closeDropdowns("company")
        }, 410)
    })
})

