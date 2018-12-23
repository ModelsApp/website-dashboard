var ctx = document.getElementById("myChart").getContext('2d');
var visitors = document.getElementById("visitorsChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["55", "Chatulle", "iilovepoke", "Floweburger", "Purple", "Orange", "Red", "Yellow"],
        datasets: [{
            label: 'Tripadvisor Review',
            data: [66, 19, 3, 23, 2, 3,45,33],
            backgroundColor: 'rgba(211,240,210,0.2)',
            borderColor: 'rgba(211,240,210,1)',
            borderWidth: 1
        },{
            label: 'Google maps Review',
            data: [40, 14, 3, 5, 2, 3,3,67],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,

        scales: {
            xAxes: [{
                stacked: true,
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

var visitorsChart = new Chart(visitors, {
    type: 'bar',
    data: {
        labels: ["55", "Chatulle", "iilovepoke", "Floweburger", "Purple", "Orange", "Red", "Yellow"],
        datasets: [{
            label: 'Tripadvisor Review',
            data: [66, 19, 3, 23, 2, 3,45,33],
            backgroundColor: 'rgba(211,240,210,0.2)',
            borderColor: 'rgba(211,240,210,1)',
            borderWidth: 1
        },{
            label: 'Google maps Review',
            data: [40, 14, 3, 5, 2, 3,3,67],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,

        scales: {
            xAxes: [{
                stacked: true,
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