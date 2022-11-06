const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const overlay = document.querySelector(".grey-overlay")
const featuresDropdown = document.querySelector("#features-dropdown")
const featuresDropdownItems = document.querySelector("#features-dropdown-items")
const companyDropdown = document.querySelector("#company-dropdown")
const companyDropdownItems = document.querySelector("#company-dropdown-items")

// Open close drop downs
featuresDropdown.addEventListener('click', changeFeaturesDropdown)
companyDropdown.addEventListener('click', changeCompanyDropdown)

function changeFeaturesDropdown(){
    featuresDropdownItems.classList.toggle('hidden')
    if(featuresDropdownItems.classList.contains('hidden')){
        document.querySelector("#features-dropdown-arrow").src="./images/icon-arrow-down.svg"
    }
    else{
        document.querySelector("#features-dropdown-arrow").src="./images/icon-arrow-up.svg"  
    }
}
function changeCompanyDropdown(){
    companyDropdownItems.classList.toggle('hidden')
    if(companyDropdownItems.classList.contains('hidden')){
        document.querySelector("#company-dropdown-arrow").src="./images/icon-arrow-down.svg"
    }
    else{
        document.querySelector("#company-dropdown-arrow").src="./images/icon-arrow-up.svg"  
    }
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
        }, 410)
    })
})

