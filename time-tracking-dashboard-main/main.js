const cardHeadings = document.querySelectorAll('.card-heading')
const selectorDaily = document.querySelector('#selector-daily')
const selectorWeekly = document.querySelector('#selector-weekly ')
const selectorMonthly = document.querySelector('#selector-monthly')
// FETCH DATA
async function fetchData(){
    const dataFetch = await fetch('./data.json')
    const data = await dataFetch.json()
    console.log(data)
    setHeadings(data)
}

fetchData()

function setHeadings(data){
    data.forEach( (item, index) => {
        cardHeadings[index].innerHTML=item.title
    })
}

function setHrs(frequency){

}