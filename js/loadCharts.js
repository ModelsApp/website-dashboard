var ctx = document.getElementById("myChart").getContext('2d');
var growthChart = document.getElementById("growthChart").getContext('2d');


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
                categoryPercentage: 0.5,
                    gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            }],            
            yAxes: [{
                stacked: true,
gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var growthChart = new Chart(growthChart, {
    type: 'line',
    data: {
    labels : ["January","February","March","April","May","June","July",],
    datasets : [
        {
        data : [65,8,90,81,56,55,40,],
        backgroundColor :'rgba(52,152,219,0)',
        borderColor : 'rgba(247,203,200,0.5)',
        pointBackgroundColor:'#ffffff',
        pointBorderColor : '#aaaaaa',
            lineTension: 0,           

        label:"New Members"},
]
    },
    fill: false,
            options: {
                bezierCurve: false,
                responsive: false,
                maintainAspectRatio:false,
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                },
                elements: {
                    arc: {},
                    point: {radius:7,},
                    line: {tension:0,},
                    rectangle: {},
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
                    }],
                    yAxes: [{
                                    gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }

                    }]
                }
            }

});
