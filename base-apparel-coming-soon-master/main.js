
const signupForm = document.getElementById("signup-form")


signupForm.addEventListener('submit', function(e){
    e.preventDefault()
    if(email.value){
        document.getElementById("valid-submit").classList.toggle("hidden")
        document.getElementById("invalid-submit").classList.add("hidden") 
        email.value = ""
    }

})

document.getElementById('btn-submit').addEventListener('click', () => {
    if(!email.value){
        document.getElementById("invalid-submit").classList.remove("hidden")    
        document.getElementById("valid-submit").classList.add("hidden")

    }

})

const email = document.getElementById("email")
