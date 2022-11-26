const linhas = document.querySelectorAll('.row');
let received;

window.onload = (e) => { pushTable(bubbleSort); };

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

window.addEventListener("message", (e)=> {
    received = eval(e.data);
    console.log(received);
    document.cookie = "op=bubbleSort; Secure";
});

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


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
console.log(getCookie("op"));