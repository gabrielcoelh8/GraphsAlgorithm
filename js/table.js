import {bubbleSort, selectionSort, insertionSort, mergeSort, quickSort, shellSort, heapSort, radixSort, gnomeSort, countingSort} from '../js/data.js';

const linhas = document.querySelectorAll('.row');
let received;

window.addEventListener("message", (e)=> {
    received = (e.data).toString();
    pushTable(eval(received)); //string to javascript code
});

function pushTable(dados) { //preencher tabela
    let cont = 0;
    linhas.forEach(linha => {
        dados[cont].forEach(dado => {
            const td = document.createElement("td");
            td.innerText = dado.valueOf();
            linha.appendChild(td);
        })
        cont++;
    })
};