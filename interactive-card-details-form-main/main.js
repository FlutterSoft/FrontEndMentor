const cardNameInput = document.querySelector("#name-input")
const cardNumberInput = document.querySelector("#number-input")
const cardMonthInput = document.querySelector("#month-expiry-input")
const cardYearInput = document.querySelector("#year-expiry-input")
const cardCvcInput = document.querySelector("#cvc-input")

const cardNumber = document.querySelector("#card-number")
const cardName = document.querySelector("#card-name")
const cardExpiry = document.querySelector("#card-expiry")
const cardCvc = document.querySelector("#card-cvc")

document.querySelector("#number-input").addEventListener('change', function(){
    cardNumber.innerHTML = this.value.slice(0,4) + ' ' + this.value.slice(4,8) + ' ' +
    this.value.slice(8,12) + ' ' +
    this.value.slice(12, 16)
})

document.querySelector("#cvc-input").addEventListener('change', function(){
    if(this.value > 0 && this.value < 999 && this.value.length == 3)
    cardCvc.innerHTML = this.value
})

document.querySelector("#name-input").addEventListener('change', function(){
    cardName.innerHTML = this.value.toUpperCase()
})
document.querySelector("#month-expiry-input").addEventListener('change', addExpiry)
document.querySelector("#year-expiry-input").addEventListener('change', addExpiry)
function addExpiry(){
    if( (cardMonthInput.value >= 1 && cardMonthInput.value < 12) && cardYearInput.value >= 22 && cardYearInput.value <= 30){
        let cardExpiryString = cardMonthInput.value + '/' + cardYearInput.value
        cardExpiry.innerHTML = cardExpiryString
    }
}

document.querySelector("#form").addEventListener('submit', function(e){
    // e.preventDefault()
    console.log('yoo')
})

