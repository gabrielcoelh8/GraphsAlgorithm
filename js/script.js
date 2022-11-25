const textLad = document.querySelector('#text-lad'),
opPrincipais = document.querySelectorAll('.principal');

window.onload = (event) => { loadPrincipal(); };

for(const op of opPrincipais) {
    op.addEventListener("click", ()=>{

    });
}

function loadPrincipal() {
    textLad.innerHTML = `
<h2>BUBBLE SORT MELHORADO</h2>
<p>Bubble Sort é um algoritmo de classificação comumente usado em ciência da computação.
  Tirando o fato de que ele é conhecidamente ineficiente, sua implementação é relativamente fácil e entendê-lo
  pode ser uma porta de entrada para o universo dos algoritmos de ordenação.
</p>
<h3>De onde vem o nome Bubble Sort? </h3>
<p>De uma suposta analogia do processo de ordenamento com um “bolhas emergindo em um tanque de água”.</p>
<h3>Como ocorre a ordenação?</h3>
<p>Cada elemento é comparado com os adjacentes, de maneira que a cada “passada” o maior elemento é deslocado para
  o fim da lista.</p>
<p>O gráfico e tabela ao lado representa o tempo que o algoritmo Bubble Sort leva para ordenar um vetores de
  1000,1000,50000,1000000.</p>
<p>O Melhor caso ocorre quando o array já está ordenado.</p>
<p>O pior caso da execução deste algoritmo manifesta-se quando a entrada está ordenada em ordem decrescente.</p>
<p>O caso médio ocorre quando a entrada está em ordem aleatória.</p>
<p>Tempo de execução do algoritmo Bubble Sort é O(n2)</p>
<ul id="ListaCasos">
  <li>Complexidade Melhor Caso: O(n)</li>
  <li>Complexidade Caso Médio: O(n2)</li>
  <li>Complexidade Pior Caso: O(n2)</li>
</ul>
<img src="img/burbbleSort_Ex.png" alt="" srcset="">`;
}
