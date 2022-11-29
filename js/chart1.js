import {piorCaso, medioCaso, melhorCaso} from '../js/data.js';
let ctx = document.getElementById('chart').getContext('2d'),
btns = document.querySelectorAll('.button-5'),
myChart;

window.addEventListener('load', load(melhorCaso,'Melhor caso'));

function load(dados, nameChart){
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1.000", "10.000", "500.000", "1.000.000"],
            datasets: [{
                label: "BubbleSort",
                data: dados[0],
                borderWidth: 3,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "SelectionSort",
                data: dados[1],
                borderWidth: 3,
                borderColor: 'rgba(255,0,0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "InsertionSort",
                data: dados[2],
                borderWidth: 3,
                borderColor: 'rgba(6,204,6,0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "MergeSort",
                data: dados[3],
                borderWidth: 3,
                borderColor: 'rgba(242, 20, 201, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "QuickSort",
                data: dados[4],
                borderWidth: 3,
                borderColor: 'rgba(1, 107, 18, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "ShellSort",
                data: dados[6],
                borderWidth: 3,
                borderColor: 'rgba(24, 1, 107, 0.9)',
                backgroundColor: 'transparent',
            }
                ,
            {
                label: "HeapSort",
                data: dados[6],
                borderWidth: 3,
                borderColor: 'rgba(119, 29, 129, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "RadixSort",
                data: dados[7],
                borderWidth: 3,
                borderColor: 'rgba(231, 255, 47, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "GnomeSort",
                data: dados[8],
                borderWidth: 3,
                borderColor: 'rgba(253, 153, 19, 0.9)',
                backgroundColor: 'transparent',
            },
            {
                label: "CountingSort",
                data: dados[9],
                borderWidth: 3,
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
                    text: nameChart,
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
                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                }
            }
        }
    });
}

btns[0].addEventListener('click', ()=>{
    myChart.destroy();
    load(melhorCaso, 'Melhor caso');
});
btns[1].addEventListener('click', ()=>{
    myChart.destroy();
    load(medioCaso, 'Médio caso');
});
btns[2].addEventListener('click', ()=>{
    myChart.destroy();
    load(piorCaso, 'Pior caso');
})

