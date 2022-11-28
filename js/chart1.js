import {piorCaso, medioCaso, melhorCaso} from '../js/data.js';

let ctx = document.getElementById('chart').getContext('2d'),
btnMedio = document.getElementById('btn-medio'),
btnMelhor = document.getElementById('btn-melhor'),
btns = document.querySelectorAll('.button-5'),
myChart;

//window.addEventListener('load', load());

/*
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}


function load(){
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["10.000", "500.000", "1.000.000"],
            datasets: [{
                label: "BubbleSort",
                data: [0.000417, 0.00034, 0.000964],
                borderWidth: 5,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "SelectionSort",
                data: [0.013715, 31.742696, 129.775622],
                borderWidth: 5,
                borderColor: 'rgba(255,0,0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "InsertionSort",
                data: [0.000017, 0.001557, 0.001852],
                borderWidth: 5,
                borderColor: 'rgba(6,204,6,0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "MergeSort",
                data: [0.000713, 0.034247, 0.070706],
                borderWidth: 5,
                borderColor: 'rgba(242, 20, 201, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "QuickSort",
                data: [0.041383, 27.310097, 115.109891],
                borderWidth: 5,
                borderColor: 'rgba(1, 107, 18, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "ShellSort",
                data: [0.002571, 0.009663, 0.009919],
                borderWidth: 5,
                borderColor: 'rgba(24, 1, 107, 0.9)',
                backgroundColor: 'transparent',
            }
                ,
            {
                label: "HeapSort",
                data: [0.003512, 0.035701, 0.066787],
                borderWidth: 5,
                borderColor: 'rgba(119, 29, 129, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "RadixSort",
                data: [0.000779, 0.041191, 0.08174],
                borderWidth: 5,
                borderColor: 'rgba(231, 255, 47, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "GnomeSort",
                data: [0.000011, 0.000569, 0.001151],
                borderWidth: 5,
                borderColor: 'rgba(253, 153, 19, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "CountingSort",
                data: [0.001959, 0.022714, 0.013296],
                borderWidth: 5,
                borderColor: 'rgba(109, 19, 253, 0.9)',
                backgroundColor: 'transparent',
            }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    ticks: { color: 'white' }
                },
                x: {
                    ticks: { color: 'white' }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Melhor Caso',
                    font: { size: 20 },
                    color: 'rgba(255, 255, 255, 0.8)',
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    });
}
*/

btns[0].addEventListener('click', ()=>{
    //myChart.destroy();
    load();
});


function updateChart(chart, dataObj) {
    // Store data into the database
    Object.assign(data, dataObj);

    // Fetch data from the database and replace old data
    chart.data.labels = Object.keys(data);
    chart.data.datasets.forEach((dataset) => {
        dataset.data = Object.values(data);
    });

    chart.update();
    const newData = {'SolidJS': 18200};
    updateChart(myChart, newData);
}

let xValues = [1000, 10000, 500000, 1000000];
let yValues = melhorCaso;
let nameValues = ["BubbleSort", "SelectionSort", "InsertionSort", "MergeSort", "QuickSort","ShellSort", "HeapSort", "RadixSort", "GnomeSort", "CountingSort"];
let optionsValues = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            ticks: { color: 'white' }
        },
        x: {
            ticks: { color: 'white' }
        }
    },
    plugins: {
        title: {
            display: true,
            text: 'Melhor Caso',
            font: { size: 20 },
            color: 'rgba(255, 255, 255, 0.8)',
        },
        legend: {
            position: 'bottom',
            labels: {
                color: 'rgba(255, 255, 255, 0.8)'
            }
        },
        tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
};

function addData(chart, label, data) {
    
}

function load(){
    myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: xValues/*,
          datasets: [{
              label: nameValues[0],
              data: yValues [0],
              borderWidth: 5,
              borderColor: 'rgba(77,166,253,0.85)',
              backgroundColor: 'transparent',
          }]*/
        },
        options: optionsValues
      });
    
    //myChart.data.labels.push(label);

    myChart.options.plugins.title.text = 'Médio caso';
    myChart.data.datasets.forEach((dataset) => {
        let cont = 1;
        dataset.data.label = nameValues[cont];
        dataset.data.push(yValues[cont]);
        cont++;
    });
    myChart.update();
}