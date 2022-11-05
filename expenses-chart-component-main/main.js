const bars = document.querySelectorAll('.bar')
const columns = document.querySelectorAll('.chart-column')
const dailySpendings = [...columns].map(col => col.childNodes[5])
const totalSpending = document.querySelector('.total-spending')

// On mouseover show the amount block above bar
bars.forEach(bar => bar.addEventListener('mouseover', function(){
    bar.parentNode.childNodes[5].style.display = "block"
}))
// On mouseout hide the amount block above bar unless if it is active
bars.forEach(bar => bar.addEventListener('mouseout', function(){
    if(!bar.classList.contains('active')){
        bar.parentNode.childNodes[5].style.display = "none"
    }
}))

// On mouse click, hide or show the amount block above bar and keep it hidden/shown
bars.forEach(bar => bar.addEventListener('click', function(){
    bar.classList.toggle('active')
    if(bar.classList.contains('active')){
        bar.parentNode.childNodes[5].style.display = "block"
    }
    else{
        bar.parentNode.childNodes[5].style.display = "none"
    }
}))

// Show amount block above bar if it contains active class
bars.forEach(bar => {
    if(bar.classList.contains('active')){
        bar.parentNode.childNodes[5].style.display = "block"
    }
})

// FETCH DATA
async function fetchChartData(){
    const chartFetch = await fetch('./data.json')
    const chartData = await chartFetch.json()
    let barHeights = chartData.map(x => x.amount)
    let newBarHeights = []

    // If any amount is over 100 then divide all by 10
    while(barHeights.some(amount => amount > 70)){
        newBarHeights = barHeights.map(x => x / 10)
        barHeights = newBarHeights
    }
    // Calculate amount to multiply all by so maximum height is 100%
    let maxHeight = Math.max(...barHeights)
    let multiplyBy = 70 / maxHeight
        newBarHeights = barHeights.map(x => x*multiplyBy)
        barHeights = newBarHeights

    for(let i = 0; i < dailySpendings.length; i++){
        dailySpendings[i].innerHTML = "$" + chartData[i].amount
        bars[i].style.height = `${barHeights[i]}%`;
    }

    let totalSum = chartData.reduce( (acc, cur) => acc+cur.amount, 0).toFixed(2)
    totalSpending.innerHTML = `$${totalSum}`
}

fetchChartData()
