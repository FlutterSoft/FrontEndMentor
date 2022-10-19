const cardNameInput = document.querySelector("#name-input")
const cardNumberInput = document.querySelector("#number-input")
const cardMonthInput = document.querySelector("#month-expiry-input")
const cardYearInput = document.querySelector("#year-expiry-input")
const cardCvcInput = document.querySelector("#cvc-input")

const cardNumber = document.querySelector("#card-number")

document.querySelector("#number-input").addEventListener('change', function(){
    cardNumber.innerHTML = this.value
})


document.querySelector("#form").addEventListener('submit', function(e){
    // e.preventDefault()
    console.log('yoo')
})

