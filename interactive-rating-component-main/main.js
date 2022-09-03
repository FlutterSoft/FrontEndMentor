let rating = 0

let ratingCircles = document.querySelectorAll(".ratingCircle")

ratingCircles.forEach(circle => circle.addEventListener('click', (e) => {
    ratingCircles.forEach(c => c.classList.remove('active'))
    rating = e.target.innerText
    document.querySelector("#ratingSelection").innerText = rating
    e.target.classList.toggle('active')
}))

document.getElementById("submitButton").addEventListener('click', () => {
    if(rating != 0){
        document.getElementById("ratingStateCard").classList.add('hidden')
        document.getElementById("thankYouStateCard").classList.remove('hidden')
    }

})