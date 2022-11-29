import {bubbleSort, selectionSort, insertionSort, mergeSort, quickSort, shellSort, heapSort, radixSort, gnomeSort, countingSort} from '../js/data.js';

let ctx = document.getElementById('chart').getContext('2d'),
myChart;

window.addEventListener('load', load(bubbleSort));

window.addEventListener("message", (e)=> {
    let received = (e.data).toString();
    reload(eval(received));
});

function reload(dados){
    myChart.destroy();
    load(dados);
};

function load(dados){
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1.000", "10.000", "500.000", "1.000.000"],
            datasets: [{
                label: "Melhor caso",
                data: dados[0],
                borderWidth: 5,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "Médio caso",
                data: dados[1],
                borderWidth: 5,
                borderColor: 'rgba(255,0,0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "Pior caso",
                data: dados[2],
                borderWidth: 5,
                borderColor: 'rgba(6,204,6,0.85)',
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
                    text: "Gráfico de cada caso",
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
};


