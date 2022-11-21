let ctx = document.getElementById('chart').getContext('2d'),
addBtn = document.getElementById('addData'),
removeBtn = document.getElementById('removeData');

// addBtn.addEventListener('click', ()=>{
//     let sizeData = chart.data.datasets[0].data.length //get length of datasets.data array
//     chart.data.datasets[0].data[sizeData] = Math.random() * 100 //new dataset
//     chart.data.labels[sizeData] = `New Data ${sizeData + 1}` //new label (with sizeData)
//     chart.update() //push data
// })

// removeBtn.addEventListener('click', ()=>{
//     chart.data.datasets[0].data.pop() //removes last array position
//     chart.data.labels.pop()
//     chart.update() //push data
// })

new Chart(ctx, {
    type: 'line',
            data: {
                labels: ["1000", "10.000", "500.000", "1.000.000"],
                datasets: [{
                    label: "BubbleSort",
                    data: [0.000001, 0.000417, 0.00034,  0.000964],
                    borderWidth: 5,
                    borderColor: 'rgba(77,166,253,0.85)',
                    backgroundColor: 'transparent',
                },
                {
                    label: "InsertionSort",
                    data: [0.000044, 0.000017, 0.001557,  0.001852],
                    borderWidth: 5,
                    borderColor: 'rgba(6,204,6,0.85)',
                    backgroundColor: 'transparent',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                y: {
                    ticks: { color: 'white'}
                    },
                    x: {
                    ticks: { color: 'white'}  
                    }
                },
                plugins: {
                title: {
                    display: true,
                    text: 'Melhor Caso',
                    font: {size: 20},
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
