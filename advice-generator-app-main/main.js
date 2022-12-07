const adviceNumber = document.querySelector("#advice-number")
const adviceText = document.querySelector("#advice-text")

async function handleClick(){
    let data = await fetchAdvice()
    setNumber(data.id)
    setText(data.advice)
}

async function fetchAdvice() {
    try{
        let response = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
        let data = await response.json()
        console.log(data)
        return data.slip
    }
    catch(e){
        console.log(e)
    }
}

function setNumber(num) {
    adviceNumber.innerHTML = num
}

function setText(text) {
    adviceText.innerHTML = `"${text}"`
}

document.querySelector('#advice-btn').addEventListener('click', handleClick)