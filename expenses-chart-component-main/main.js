async function fetchChartData(){
    const chartFetch = await fetch('./data.json')
    const chartData = await chartFetch.json()
    console.log(chartData)
}

fetchChartData()