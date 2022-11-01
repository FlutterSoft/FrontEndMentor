const bars = document.querySelectorAll('.bar')
const columns = document.querySelectorAll('.chart-column')
const dailySpendings = [...columns].map(col => col.childNodes[5])
// console.log(dailySpendings)

bars.forEach(bar => bar.addEventListener('mouseover', function(){
    console.log(bar.parentNode)
    bar.parentNode.childNodes[5].style.display = "block"
}))
bars.forEach(bar => bar.addEventListener('mouseout', function(){
    console.log(bar.parentNode)
    bar.parentNode.childNodes[5].style.display = "none"
}))

// FETCH DATA
async function fetchChartData(){
    const chartFetch = await fetch('./data.json')
    const chartData = await chartFetch.json()
    // console.log(chartData)

    for(let i = 0; i < dailySpendings.length; i++){
        dailySpendings[i].innerHTML = "$" + chartData[i].amount
    }

}
fetchChartData()
