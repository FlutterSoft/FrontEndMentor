const $ = document.querySelector.bind(document)

const cardNameInput = $("#name-input")
const cardNumberInput = $("#number-input")
const cardMonthInput = $("#month-expiry-input")
const cardYearInput = $("#year-expiry-input")
const cardCvcInput = $("#cvc-input")

const cardNumber = $("#card-number")
const cardName = $("#card-name")
const cardExpiry = $("#card-expiry")
const cardCvc = $("#card-cvc")

$("#number-input").addEventListener('input', function(){
    if(this.value.length > 16){
        this.value = this.value.slice(0, 16)
    }
    if(this.value.length == 16){
        cardNumber.innerHTML = this.value.slice(0,4) + ' ' + this.value.slice(4,8) + ' ' +
        this.value.slice(8,12) + ' ' +
        this.value.slice(12, 16)
    }
})

$("#cvc-input").addEventListener('input', function(){
    if(this.value.length > 3){
        this.value = this.value.slice(0, 3)
    }
    if(this.value > 0 && this.value < 999 && this.value.length == 3)
    cardCvc.innerHTML = this.value
})

$("#name-input").addEventListener('input', function(){
    cardName.innerHTML = this.value.toUpperCase()
})

$("#month-expiry-input").addEventListener('input', addExpiry)
$("#year-expiry-input").addEventListener('input', addExpiry)

function addExpiry(){
    if(this.value.length > 2){
        this.value = this.value.slice(0, 2)
    }

    if( (cardMonthInput.value >= 1 && cardMonthInput.value <= 12) && cardYearInput.value >= 22 && cardYearInput.value <= 30){
        let cardExpiryString = cardMonthInput.value + '/' + cardYearInput.value
        cardExpiry.innerHTML = cardExpiryString
    }
}

$("#form").addEventListener('submit', function(e){

    e.preventDefault()
    console.log(e)

})


