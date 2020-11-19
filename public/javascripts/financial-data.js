const url = 'http://api.coindesk.com/v1/bpi/historical/close.json';

const startDate = document.getElementById('start') 
console.log(startDate)
const endDate = document.getElementById('end')
const button = document.getElementById('button')

// Update chart is a function that fetches data from the api and updates the chart with the response data 
function updateChart(startDate, endDate){
    // if start and enddate are empty the endpoint is the default one, otherwise the start and enddate will be added as query params.
    const endpoint = (startDate && endDate) ? `${url}?start=${startDate}&end=${endDate}` : url
    axios.get(endpoint)
        .then((response) => {
            console.log(document)
            console.log(response)
            const dataObject = response.data.bpi
            const keys = Object.keys(dataObject)
            const values = Object.values(dataObject)

            // DRAW GRAPH
            const ctx = document.getElementById('myChart').getContext('2d');
            const chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',
                // The data for our dataset
                data: {
                    labels: keys,
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: values
                    }]
                },
                // Configuration options go here
                options: {}
            });
        })
        .catch( err => console.log('There has been an error: ', err))
}


button.addEventListener('click', () => {
    console.log('yes')
    console.log(startDate.value)
    console.log(endDate.value)
    updateChart(startDate.value,endDate.value)
})


// update chart function called on initial load
updateChart(startDate.value, endDate.value);

