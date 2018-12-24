var ctx = document.getElementById("myChart").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["55", "Chatulle", "iilovepoke", "Floweburger", "Purple", "Orange", "Red", "Yellow"],
        datasets: [{
            label: 'Tripadvisor Review',
            data: [66, 19, 3, 23, 2, 3,45,33],
            backgroundColor: 'rgba(211,240,210,0.6)',
            borderColor: 'rgba(211,240,210,1)',
            borderWidth: 1
        },{
            label: 'Google maps Review',
            data: [40, 14, 3, 5, 2, 3,3,67],
            backgroundColor: 'rgba(193,212,241,0.6)',
            borderColor: 'rgba(193,212,241,1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,

        scales: {
            xAxes: [{
                stacked: true,
                barPercentage: 1,
                categoryPercentage: 0.5

            }],            
            yAxes: [{
                stacked: true,

                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

