const emailInput = document.querySelector('#email-input')
const submitBtn = document.querySelector('#submit-button')

console.log(submitBtn)

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(!emailInput.validity.valid){
        document.querySelector('.invalid-text').classList.remove('hidden')
        emailInput.classList.add('invalid-color')
        document.querySelector('.valid-text').classList.add('hidden')

    }
    else{
        document.querySelector('.invalid-text').classList.add('hidden')
        emailInput.classList.remove('invalid-color')
        document.querySelector('.valid-text').classList.remove('hidden')
        emailInput.value=""
    }
})