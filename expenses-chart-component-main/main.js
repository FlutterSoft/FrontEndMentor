const bars = document.querySelectorAll('.bar')
const columns = document.querySelectorAll('.chart-column')
const dailySpendings = [...columns].map(col => col.childNodes[5])
const totalSpending = document.querySelector('.total-spending')
// console.log(dailySpendings)

bars.forEach(bar => bar.addEventListener('mouseover', function(){
    bar.parentNode.childNodes[5].style.display = "block"
}))
bars.forEach(bar => bar.addEventListener('mouseout', function(){
    bar.parentNode.childNodes[5].style.display = "none"
}))


// FETCH DATA
async function fetchChartData(){
    const chartFetch = await fetch('./data.json')
    const chartData = await chartFetch.json()
    const barHeights = chartData.map(x => x.amount)
    console.log(barHeights)
    // while(barHeights.some(amount => amount > 100)){
    //     barHeights.forEach(x => x / 10)
    // }
    console.log(barHeights)

    for(let i = 0; i < dailySpendings.length; i++){
        dailySpendings[i].innerHTML = "$" + chartData[i].amount
        // bars[i].style.height = `${barHeights * 2.5}px`;
    }


    let totalSum = chartData.reduce( (acc, cur) => acc+cur.amount, 0).toFixed(2)
    totalSpending.innerHTML = `$${totalSum}`

}
fetchChartData()
