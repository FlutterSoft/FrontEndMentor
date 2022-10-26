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

const allInputs = [$("#name-input"), $("#number-input"), $("#month-expiry-input"), $("#year-expiry-input"), $("#cvc-input") ]

$("#number-input").addEventListener('input', function(){
    if(this.value.length == 4 || this.value.length == 9 || this.value.length == 14){
        this.value = this.value + ' '
    }
    if(this.value.length > 19){
        this.value = this.value.slice(0, 19)
    }
    else if(this.value.length < 16){
        validity.number = false
    }
    if(this.value.length == 19){
        cardNumber.innerHTML = this.value
        validity.number = true
    }
})

$("#cvc-input").addEventListener('input', function(){
    if(this.value.length > 3){
        this.value = this.value.slice(0, 3)
    }
    if(this.value > 0 && this.value < 999 && this.value.length == 3){
        cardCvc.innerHTML = this.value
        validity.cvc = true
    }
    else{
        validity.cvc = false
    }
})

$("#name-input").addEventListener('input', function(){
    if(this.value.length > 1){
        cardName.innerHTML = this.value.toUpperCase()
        validity.name = true
    }
    else{
        validity.name = false
    }

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
        validity.month = true
        validity.year = true
    }
    else{
        validity.month = false
        validity.year = false
    }
}

const validity = {
    "name" : false,
    "number" : false,
    "month" : false,
    "year" : false,
    "cvc" : false,
}

$("#form").addEventListener('submit', function(e){
    e.preventDefault()
    let invalid = Object.values(validity).includes(false)

    if(!invalid){
        $("#form").classList.add('hidden')
        $("#success-section").classList.remove('hidden')
    }
})

$("#continue-btn").addEventListener('click', function(){
    $("#form").classList.remove('hidden')
    $("#success-section").classList.add('hidden') 
    cardNameInput.value = ""
    cardNumberInput.value = ""
    cardCvcInput.value = ""
    cardMonthInput.value = ""
    cardYearInput.value = ""
    cardNumber.innerHTML = "0000 0000 0000 0000"
    cardName.innerHTML = "JANE APPLESEED"
    cardExpiry.innerHTML = "00/00"
    cardCvc.innerHTML = "123"
})

