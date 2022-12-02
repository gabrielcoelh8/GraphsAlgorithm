export let bubbleSort = [
    [0.000001, 0.000417, 0.00034, 0.000964],
    [0.006738, 0.142355, 512.679436, 2388.123164],
    [0.006474, 0.042532, 343.220966, 1348.68849],
  ],
  selectionSort = [
    [0.001229, 0.013715, 31.742696, 129.775622],
    [0.001274, 0.100288, 248.859193, 306.107902],
    [0.001085, 0.103675, 265.357151, 435.939282],
  ],
  insertionSort = [
    [0.000044, 0.000017, 0.001557, 0.001852],
    [0.003258, 0.009565, 23.970349, 94.736178],
    [0.000923, 0.018965, 46.574507, 194.466472],
  ],
  mergeSort = [
    [0.000045, 0.000713, 0.034247, 0.070706],
    [0.000905, 0.001557, 0.073101, 0.125868],
    [0.00005, 0.000476, 0.028764, 0.055902],
  ],
  quickSort = [
    [0.000608, 0.041383, 27.310097, 115.109891],
    [0.000099, 0.00082, 0.046062, 0.08672],
    [0.000498, 0.045557, 86.76409, 374.190479],
  ],
  shellSort = [
    [0.000247, 0.002571, 0.009663, 0.009919],
    [0.000789, 0.002191, 0.084805, 0.181332],
    [0.000019, 0.000264, 0.01696, 0.03305],
  ],
  heapSort = [
    [0.000505, 0.003512, 0.035701, 0.066787],
    [0.00007, 0.001057, 0.062128, 0.128654],
    [0.000055, 0.000538, 0.036278, 0.073219],
  ],
  radixSort = [
    [0.000304, 0.000779, 0.041191, 0.08174],
    [0.000403, 0.001673, 0.040895, 0.0938],
    [0.000382, 0.000916, 0.041909, 0.08783],
  ],
  gnomeSort = [
    [0.000004, 0.000011, 0.000569, 0.001151],
    [0.000911, 0.051307, 128.786572, 558.915672],
    [0.001247, 0.102252, 267.839367, 1109.643701],
  ],
  countingSort = [
    [0.000646, 0.001959, 0.022714, 0.013296],
    [0.000305, 0.002076, 0.017242, 0.038045],
    [0.000295, 0.00116, 0.022784, 0.020415],
  ],
  piorCaso = [
    [0.006474, 0.042532, 343.220966, 1348.68849],
    [0.001085, 0.103675, 265.357151, 435.939282],
    [0.000923, 0.018965, 46.574507, 194.466472],
    [0.00005, 0.000476, 0.028764, 0.055902],
    [0.000498, 0.045557, 86.76409, 374.190479],
    [0.000019, 0.000264, 0.01696, 0.03305],
    [0.000055, 0.000538, 0.036278, 0.073219],
    [0.000382, 0.000916, 0.041909, 0.08783],
    [0.001247, 0.102252, 267.839367, 1109.643701],
    [0.000295, 0.00116, 0.022784, 0.020415],
  ],
  medioCaso = [
    [0.006738, 0.142355, 512.679436, 2388.123164],
    [0.001274, 0.100288, 248.859193, 306.107902],
    [0.003258, 0.009565, 23.970349, 94.736178],
    [0.000905, 0.001557, 0.073101, 0.125868],
    [0.000099, 0.00082, 0.046062, 0.08672],
    [0.000789, 0.002191, 0.084805, 0.181332],
    [0.00007, 0.001057, 0.062128, 0.128654],
    [0.000403, 0.001673, 0.040895, 0.0938],
    [0.000911, 0.051307, 128.786572, 558.915672],
    [0.000305, 0.002076, 0.017242, 0.038045],
  ],
  melhorCaso = [
    [0.000001, 0.000417, 0.00034, 0.000964],
    [0.001229, 0.013715, 31.742696, 129.775622],
    [0.000044, 0.000017, 0.001557, 0.001852],
    [0.000045, 0.000713, 0.034247, 0.070706],
    [0.000608, 0.041383, 27.310097, 115.109891],
    [0.000247, 0.002571, 0.009663, 0.009919],
    [0.000505, 0.003512, 0.035701, 0.066787],
    [0.000304, 0.000779, 0.041191, 0.08174],
    [0.000004, 0.000011, 0.000569, 0.001151],
    [0.000646, 0.001959, 0.022714, 0.013296],
  ],
  textSort = [
    {
      text: `<h2>Algoritmos de Ordenação</h2>
    <div>
    <p>
    Usado para ordenar elementos de uma dada <i>array/list</i> em ordem específica. Há vários algoritmos de ordenação utilizáveis para cada caso. 
    É considerado estável se dois ou mais itens com o mesmo valor se manterem na mesma posição relativa, mesmo após a ordenação. 
    Um algoritmo de ordenação tem sua eficiência determinada pelo tempo de complexidade e complexidade de espaço.
    </p>
    <ol>
    <li><b>Tempo de complexidade</b><span style="font-weight: 400;">: refere-se ao tempo levado por um algoritmo para completar sua execu&ccedil;&atilde;o de acordo com o tamanho do </span><i><span style="font-weight: 400;">inputs</span></i><span style="font-weight: 400;">. Pode ser representado de diferentes formas: Big-O Notation</span> <i><span style="font-weight: 400;">(O-notation)</span></i><span style="font-weight: 400;">. Representa o limite superior (</span><i><span style="font-weight: 400;">majorante</span></i><span style="font-weight: 400;">) do tempo de execu&ccedil;&atilde;o. Logo, d&aacute; a complexidade do pior caso.</span></li>
    <li><b>Complexidade de espa&ccedil;o</b><span style="font-weight: 400;">: refere-se ao total de mem&oacute;ria usada pela execu&ccedil;&atilde;o completa, incluindo mem&oacute;ria auxiliar e </span><i><span style="font-weight: 400;">input</span></i><span style="font-weight: 400;">. A mem&oacute;ria da auxiliar &eacute; um espa&ccedil;o adicional ocupado separadamente dos dados de </span><i><span style="font-weight: 400;">input</span></i><span style="font-weight: 400;">.</span></li>
    </ol>
    </div>
    <div class="img code">
    <img src="img/sorting.png" alt="" srcset="">
    </div>`,
    },
    {
      text: `
    <h2>Bubble Sort</h2>
    <div class="img">
    <img src="img/BubbleSort.gif" alt="" srcset="">
    </div>  

    <div>
    <p><span style="font-weight: 400;">Assim como o movimento suave de bolhas de ar emergindo do fundo &agrave; superf&iacute;cie da &aacute;gua, cada elemento de um dado </span><i><span style="font-weight: 400;">array </span></i><span style="font-weight: 400;">&eacute; movido at&eacute; seu fim em cada itera&ccedil;&atilde;o. Por esse motivo, chama-se </span><b>Bubble Sort</b><span style="font-weight: 400;"> (ordena&ccedil;&atilde;o em bolha, em tradu&ccedil;&atilde;o livre).</span></p>
    <p><span style="font-weight: 400;">No melhor caso, o algoritmo executa 𝓝 opera&ccedil;&otilde;es relevantes, onde 𝓝 representa o n&uacute;mero de elementos do </span><i><span style="font-weight: 400;">array</span></i><span style="font-weight: 400;">. No pior caso, s&atilde;o feitas 𝓝</span><sup><b>2</b></sup><span style="font-weight: 400;"> opera&ccedil;&otilde;es. A complexidade desse algoritmo &eacute; de ordem quadr&aacute;tica. Por isso, ele n&atilde;o &eacute; recomendado em quantidade elevada de dados.</span></p>
    <ul>
    <li><span style="font-weight: 400;">Pior caso: </span><b>O(n</b><sup><b>2</b></sup><b>)</b></li>
    <li><span style="font-weight: 400;">M&eacute;dio caso: </span><b>O(n</b><sup><b>2</b></sup><b>)</b></li>
    <li><span style="font-weight: 400;">Melhor caso: </span><b>O(n)</b></li>
    </ul>
    </div>

    <div class="code">
    <p><span style="font-weight: 400;">for</span><span style="font-weight: 400;"> (</span><span style="font-weight: 400;">int</span><span style="font-weight: 400;"> i = 0</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i &lt; v.length - 1</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i++) {</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">boolean</span><span style="font-weight: 400;"> estaOrdenado = true</span><span style="font-weight: 400;">;</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">for</span><span style="font-weight: 400;"> (</span><span style="font-weight: 400;">int</span><span style="font-weight: 400;"> j = 0</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> j &lt; v.length - 1 - i</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> j++) {</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">if</span><span style="font-weight: 400;"> (v[j] &gt; v[j + 1]) {</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">int</span><span style="font-weight: 400;"> aux = v[j]</span><span style="font-weight: 400;">;</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v[j] = v[j + 1]</span><span style="font-weight: 400;">;</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v[j + 1] = aux</span><span style="font-weight: 400;">;</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;estaOrdenado = false</span><span style="font-weight: 400;">;</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;}</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">if</span><span style="font-weight: 400;"> (estaOrdenado) {</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">break;</span></p>
    <p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;}</span></p>
    <p><span style="font-weight: 400;">}</span></p>
    </div>
    `,
    },
    {
      text: `<h2>Selection Sort</h2>
      <div class="img">
      <img src="img/SelectionSort.gif" alt="" srcset="">
      </div>  
      <div>
      <p>
      <b>Selection sort</b> é um algoritmo de ordenação que seleciona o menor elemento de uma lista desordenada em cada interação e posiciona o elemento no início da lista desordenada. 
      </p>
      <p>
      Defina o primeiro elemento como mínimo. Compare mínimo com o segundo elemento. Se o segundo elemento for menor que o mínimo, atribua o segundo elemento como mínimo. Compare mínimo com o terceiro elemento. Novamente, se o terceiro elemento for menor, atribua o mínimo ao terceiro elemento, caso contrário, não faça nada. O processo continua até o último elemento. Após cada iteração, o mínimo é colocado na frente da lista não classificada. Para cada iteração, a indexação começa no primeiro elemento não classificado. Os passos 1 a 3 são repetidos até que todos os elementos sejam colocados em suas posições corretas.
      </p>
      <ol>
        <li>Pior caso: <b>O(n<sup>2</sup>)</b></li>
        <li>Médio caso: <b>O(n<sup>2</sup>)</b></li>
        <li>Melhor caso: <b>O(n<sup>2</sup>)</b></li>
      </ol>
      </div>
      <div class="code">
      <div>
<div><span>&nbsp; &nbsp; </span><span>for</span><span> (</span><span>int</span><span> i = 0</span><span>;</span><span> i &lt; n-1</span><span>;</span><span> i++){</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> min_idx = i</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>for</span><span> (</span><span>int</span><span> j = i+1</span><span>;</span><span> j &lt; n</span><span>;</span><span> j++)</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>if</span><span> (array[j] &lt; array[min_idx])</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; min_idx = j</span><span>;</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> temp = array[min_idx]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; array[min_idx] = array[i]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; array[i] = temp</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div>
</div>
      </div>
      `,
    },
    {
      text: `<h2>Insertion Sort</h2>
      <div class="img">
      <img src="img/InsertionSort.gif" alt="" srcset="">
      </div>  
    <div>
    <p>O <b>Insertion Sort</b> inicia a ordena&ccedil;&atilde;o dividindo o vetor em duas parti&ccedil;&otilde;es: uma ordenada &agrave; esquerda e outra n&atilde;o ordenada &agrave; direita. Inicialmente, a parti&ccedil;&atilde;o esquerda s&oacute; ter&aacute; um elemento (&eacute; o caso trivial da ordena&ccedil;&atilde;o).</p>
    <p>A inser&ccedil;&atilde;o dos elementos na parti&ccedil;&atilde;o ordenada &eacute; realizada em duas etapas. Na primeira etapa, procuramos a posi&ccedil;&atilde;o de inser&ccedil;&atilde;o. Na segunda etapa, deslocamos os elementos da esquerda para a direita para que a posi&ccedil;&atilde;o de inser&ccedil;&atilde;o fique livre para que o elemento seja inserido.</p>
    <ul>
    <li><span style="font-weight: 400;">Pior caso: </span><b>O(n</b><sup><b>2</b></sup><b>)</b></li>
    <li><span style="font-weight: 400;">M&eacute;dio caso: </span><b>O(n</b><sup><b>2</b></sup><b>)</b></li>
    <li><span style="font-weight: 400;">Melhor caso: </span><b>O(n)</b></li>
    </ul>
    </div>
    <div class="code">
    <div>
<div><span>int</span><span> n = array.length</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>for</span><span> (</span><span>int</span><span> i = 1</span><span>;</span><span> i &lt; n</span><span>;</span><span> ++i) {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> key = array[i]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> j = i - 1</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>while</span><span> (j &gt;= 0 &amp;&amp; array[j] &gt; key) {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; array[j + 1] = array[j]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; j = j - 1</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; array[j + 1] = key</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div>
</div>
    </div>
      `,
    },
    {
      text: `<h2>Merge Sort</h2>
      <div class="img">
      <img src="img/MergeSort.gif" alt="" srcset="">
      </div> 
      <div>
<p><span style="font-weight: 400;">Merge &eacute; a rotina que combina dois arrays ordenados em um outro tamb&eacute;m ordenado. Assim como o Quick Sort aplica v&aacute;rias vezes o particionamento para ordenar um array, o Merge Sort tamb&eacute;m aplica o Merge v&aacute;rias para ordenar um array.</span></p>
<ol>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Pior caso: </span><b>O(n*log n)</b></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">M&eacute;dio caso: </span><b>O(n*log n)</b></li>
<li style="font-weight: 400;" aria-level="1">Melhor caso: <b>O(n*log n)</b></li>
</ol>
</div>
<div class="code">
<div>
<div><span>sort(array</span><span>,</span><span> 0</span><span>,</span><span> array.length-1)</span><span>;</span></div>
<br />
<div><span>void</span><span> merge(</span><span>int</span><span> arr[]</span><span>,</span><span> </span><span>int</span><span> l</span><span>,</span><span> </span><span>int</span><span> m</span><span>,</span><span> </span><span>int</span><span> r)</span></div>
<div><span>&nbsp; &nbsp; {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> n1 = m - l + 1</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> n2 = r - m</span><span>;</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> L[] = new </span><span>int</span><span>[n1]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> R[] = new </span><span>int</span><span>[n2]</span><span>;</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>for</span><span> (</span><span>int</span><span> i = 0</span><span>;</span><span> i &lt; n1</span><span>;</span><span> ++i)</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; L[i] = arr[l + i]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>for</span><span> (</span><span>int</span><span> j = 0</span><span>;</span><span> j &lt; n2</span><span>;</span><span> ++j)</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; R[j] = arr[m + 1 + j]</span><span>;</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> i = 0</span><span>,</span><span> j = 0</span><span>;</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> k = l</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>while</span><span> (i &lt; n1 &amp;&amp; j &lt; n2) {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>if</span><span> (L[i] &lt;= R[j]) {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; arr[k] = L[i]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; i++</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>else</span><span> {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; arr[k] = R[j]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; j++</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; k++</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>while</span><span> (i &lt; n1) {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; arr[k] = L[i]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; i++</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; k++</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>while</span><span> (j &lt; n2) {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; arr[k] = R[j]</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; j++</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; k++</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div>
<div><span>&nbsp; &nbsp; }</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; </span><span>void</span><span> sort(</span><span>int</span><span> arr[]</span><span>,</span><span> </span><span>int</span><span> l</span><span>,</span><span> </span><span>int</span><span> r)</span></div>
<div><span>&nbsp; &nbsp; {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; </span><span>if</span><span> (l &lt; r) {</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span>int</span><span> m = l + (r - l) / 2</span><span>;</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sort(arr</span><span>,</span><span> l</span><span>,</span><span> m)</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sort(arr</span><span>,</span><span> m + 1</span><span>,</span><span> r)</span><span>;</span></div>
<div><span>&nbsp;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; merge(arr</span><span>,</span><span> l</span><span>,</span><span> m</span><span>,</span><span> r)</span><span>;</span></div>
<div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div>
<div><span>&nbsp; &nbsp; }</span></div>
</div>
</div>
      `,
    },
    {
      text: `<h2>Quick Sort</h2>`,
    },
    {
      text: `<h2>Shell Sort</h2>`,
    },
    {
      text: `<h2>Heap Sort</h2>`,
    },
    {
      text: `<h2>Radix Sort</h2>`,
    },
    {
      text: `<h2>Gnome Sort</h2>`,
    },
    {
      text: `<h2>Counting Sort</h2>`,
    },
  ];
