var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(211,240,210,0.6)',
            borderColor: 'rgba(211,240,210,1)',

        }]
    },
    options: {
        scales: {
            xAxes: [{
                barPercentage: 1,
                categoryPercentage: 0.3
            }],            
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
