const cardHeadings = document.querySelectorAll('.card-heading')
const selectorDaily = document.querySelector('#selector-daily')
const selectorWeekly = document.querySelector('#selector-weekly ')
const selectorMonthly = document.querySelector('#selector-monthly')
const selectors = document.querySelectorAll('.frequency-selector-btn')
const allHours = document.querySelectorAll('.hours')
const allPreviousHours = document.querySelectorAll('.previous-hours')

selectorDaily.addEventListener('click', (e)=> {
    setHrs('daily', 'Yesterday ')
    setSelected(e)
})
selectorWeekly.addEventListener('click', (e)=> {
    setHrs('weekly', 'Last Week ')
    setSelected(e)
})
selectorMonthly.addEventListener('click', (e)=> {
    setHrs('monthly', 'Last Month ')
    setSelected(e)
})

async function setHrs(frequency, word){
    const data = await fetchData()
    allHours.forEach( (el, index) => {
        el.innerHTML=data[index].timeframes[frequency].current + 'hrs'
    })
    allPreviousHours.forEach( (el, index) => {
        el.innerHTML=`${word} - ${data[index].timeframes[frequency].previous}hrs`
    })
}

function setSelected(e){
    selectors.forEach(selector => {
        if(e.target != selector){
            selector.classList.remove('selected')
        }
        else{
            selector.classList.add('selected')
        }
    })
}

// FETCH DATA
async function fetchData(){
    try{
        const response = await fetch('./data.json')
        const data = await response.json()
        return data
    }
    catch(err){
        console.log(err)
        throw err
    }
}