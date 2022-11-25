const linhas = document.querySelectorAll('.row');

window.onload = (event) => { pushTable(bubbleSort); };

let bubbleSort = [
    [0.000001, 0.000417, 0.00034, 0.000964],            //melhor
    [0.006738, 0.142355, 512.679436, 2388.123164],      //medio
    [0.006474, 0.042532, 343.220966, 1348.68849]        //pior
],
    selectionSort = [
    [0.001229, 0.013715, 31.742696, 129.775622],        //melhor
    [0.001274, 0.100288, 248.859193, 306.107902],       //medio
    [0.001085, 0.103675, 265.357151, 435.939282]        //pior
];

function pushTable(dados) {
    let cont = 0;
    linhas.forEach(linha => {
        dados[cont].forEach(dado => {
            const td = document.createElement("td");
            td.innerText = dado.valueOf();
            linha.appendChild(td);
        })
        cont++;
    })
}

document.addEventListener('message', onMessage);

function onMessage(e) {
    const msg = e;  // `e.data` is the same as the `msg` object in the iframe page's script.
    
    console.log(msg);
}