import {piorCaso, medioCaso, melhorCaso} from '../js/data.js';

const linhas = document.querySelectorAll('.row'),
btns = document.querySelectorAll('.button-5');

window.onload = (event) => {pushTable(melhorCaso);};

btns[0].addEventListener('click', ()=>{
    updateTable(melhorCaso);
});
btns[1].addEventListener('click', ()=>{
    updateTable(medioCaso);
});
btns[2].addEventListener('click', ()=>{
    updateTable(piorCaso);
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

function updateTable(dados) { //update tabela
    let cont = 0;
    linhas.forEach(linha => {
        let colunas = linha.getElementsByTagName('td');
        for(let index = 0; index < colunas.length; index++){
            colunas[index].innerText = dados[cont][index].valueOf();
        }
        cont++;
    })
};