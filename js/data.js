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
<p><strong>sort(array, </strong><strong>0</strong><strong>, </strong><strong>array</strong><strong>.</strong><strong>length</strong><strong>-</strong><strong>1</strong><strong>);</strong></p>
<p>&nbsp;</p>
<p><strong>void</strong> <strong>merge(</strong><strong>int</strong><strong> arr[], </strong><strong>int</strong><strong> l, </strong><strong>int</strong><strong> m, </strong><strong>int</strong><strong> r)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>n1</strong> <strong>=</strong><strong> m </strong><strong>-</strong><strong> l </strong><strong>+</strong> <strong>1</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>n2</strong> <strong>=</strong><strong> r </strong><strong>-</strong><strong> m</strong><strong>;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>L</strong><strong>[]</strong> <strong>=</strong> <strong>new</strong> <strong>int</strong><strong>[</strong><strong>n1</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>R</strong><strong>[]</strong> <strong>=</strong> <strong>new</strong> <strong>int</strong><strong>[</strong><strong>n2</strong><strong>];</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>for</strong> <strong>(</strong><strong>int</strong> <strong>i</strong> <strong>=</strong> <strong>0</strong><strong>;</strong><strong> i </strong><strong>&lt;</strong><strong> n1</strong><strong>;</strong> <strong>++</strong><strong>i</strong><strong>)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>L</strong><strong>[</strong><strong>i</strong><strong>]</strong> <strong>=</strong><strong> arr</strong><strong>[</strong><strong>l </strong><strong>+</strong><strong> i</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>for</strong> <strong>(</strong><strong>int</strong> <strong>j</strong> <strong>=</strong> <strong>0</strong><strong>;</strong><strong> j </strong><strong>&lt;</strong><strong> n2</strong><strong>;</strong> <strong>++</strong><strong>j</strong><strong>)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>R</strong><strong>[</strong><strong>j</strong><strong>]</strong> <strong>=</strong><strong> arr</strong><strong>[</strong><strong>m </strong><strong>+</strong> <strong>1</strong> <strong>+</strong><strong> j</strong><strong>];</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>i</strong> <strong>=</strong> <strong>0</strong><strong>,</strong><strong> j </strong><strong>=</strong> <strong>0</strong><strong>;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>k</strong> <strong>=</strong><strong> l</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>while</strong> <strong>(</strong><strong>i </strong><strong>&lt;</strong><strong> n1 </strong><strong>&amp;&amp;</strong><strong> j </strong><strong>&lt;</strong><strong> n2</strong><strong>)</strong> <strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>if</strong> <strong>(</strong><strong>L</strong><strong>[</strong><strong>i</strong><strong>]</strong> <strong>&lt;=</strong> <strong>R</strong><strong>[</strong><strong>j</strong><strong>])</strong> <strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr</strong><strong>[</strong><strong>k</strong><strong>]</strong> <strong>=</strong> <strong>L</strong><strong>[</strong><strong>i</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i</strong><strong>++</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>else</strong> <strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr</strong><strong>[</strong><strong>k</strong><strong>]</strong> <strong>=</strong> <strong>R</strong><strong>[</strong><strong>j</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j</strong><strong>++</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k</strong><strong>++</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>while</strong> <strong>(</strong><strong>i </strong><strong>&lt;</strong><strong> n1</strong><strong>)</strong> <strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr</strong><strong>[</strong><strong>k</strong><strong>]</strong> <strong>=</strong> <strong>L</strong><strong>[</strong><strong>i</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i</strong><strong>++</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k</strong><strong>++</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>while</strong> <strong>(</strong><strong>j </strong><strong>&lt;</strong><strong> n2</strong><strong>)</strong> <strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr</strong><strong>[</strong><strong>k</strong><strong>]</strong> <strong>=</strong> <strong>R</strong><strong>[</strong><strong>j</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j</strong><strong>++</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k</strong><strong>++</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>void</strong> <strong>sort(</strong><strong>int</strong><strong> arr[], </strong><strong>int</strong><strong> l, </strong><strong>int</strong><strong> r)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>if</strong> <strong>(</strong><strong>l </strong><strong>&lt;</strong><strong> r</strong><strong>)</strong> <strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>m</strong> <strong>=</strong><strong> l </strong><strong>+</strong> <strong>(</strong><strong>r </strong><strong>-</strong><strong> l</strong><strong>)</strong> <strong>/</strong> <strong>2</strong><strong>;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>sort(arr, l, m);</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>sort(arr, m </strong><strong>+</strong> <strong>1</strong><strong>, r);</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>merge(arr, l, m, r);</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
</div>
      `,
    },
    {
      text: `<h2>Quick Sort</h2>
      <div class="img">
      <img src="img/QuickSort.gif" alt="" srcset="">
      </div> 
      <div>
      <p>
      Quick Sort adota a estratégia de divisão e conquista. A estratégia consiste em rearranjar as chaves de modo que as chaves "menores" precedam as chaves "maiores". Em seguida o Quick Sort ordena as duas sublistas de chaves menores e maiores recursivamente até que a lista completa se encontre ordenada. Os passos são: Escolha um elemento da lista, denominado pivô; Particiona: rearrange a lista de forma que todos os elementos anteriores ao pivô sejam menores que ele, e todos os elementos posteriores ao pivô sejam maiores que ele. Ao fim do processo o pivô estará em sua posição final e haverá duas sub listas não ordenadas. Essa operação é denominada partição; Recursivamente ordene a sub lista dos elementos menores e a sublista dos elementos maiores;
      </p>
      <ol>
      <li>Pior caso: O(n<sup>2</sup>)</li>
      <li>Médio caso: O(n*log n)</li>
      <li>Melhor caso: O(n*log n)</li>
      </ol>
      </div>
      <div class="code">
      <p>quicksort(array, 0, n - 1);</p>
<p>&nbsp;</p>
<p>int partition (int[] elements, int start, int end){</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;int i = start;</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;for (int j = start; j &lt; end; j++) {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (elements[j] &lt;= elements[end]) {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(elements, i++, j);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(elements, i, end);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return i;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
<p>&nbsp;&nbsp;&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;void swap (int[] elements, int i, int j){</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int k = elements[i];</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elements[i] = elements[j];</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elements[j] = k;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;void quicksort (int[] elements, int start, int end){</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (start &lt; end) {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int pivot = partition(elements, start, end);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(pivot-start &lt; end-pivot){&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <em>// recurse into the smaller partition</em></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quicksort(elements, start, pivot-1);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start = pivot+1;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quicksort(elements, pivot+1, end);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end = pivot -1;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
      </div>
      `,
    },
    {
      text: `<h2>Shell Sort</h2>
      <div class="img">
      <img src="img/ShellSort.gif" alt="" srcset="">
      </div> 
      <div>
      <p><span style="font-weight: 400;">Criado por Donald Shell em 1959, publicado pela Universidade de Cincinnati, Shell Sort &eacute; o mais eficiente algoritmo de classifica&ccedil;&atilde;o dentre os de complexidade quadr&aacute;tica. &Eacute; um refinamento do m&eacute;todo de inser&ccedil;&atilde;o direta. O algoritmo difere do m&eacute;todo de inser&ccedil;&atilde;o direta pelo fato de no lugar de considerar o array a ser ordenado como um &uacute;nico segmento, ele considera v&aacute;rios segmentos sendo aplicado o m&eacute;todo de inser&ccedil;&atilde;o direta em cada um deles. Basicamente o algoritmo passa v&aacute;rias vezes pela lista dividindo o grupo maior em menores. Nos grupos menores &eacute; aplicado o m&eacute;todo da ordena&ccedil;&atilde;o por inser&ccedil;&atilde;o. Implementa&ccedil;&otilde;es do algoritmo.</span></p>
<ol>
<li style="font-weight: 400;"><span style="font-weight: 400;">Pior caso: </span><strong>O(n</strong><sup><strong>2</strong></sup><strong>)</strong></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">M&eacute;dio caso: </span><strong>&Omega;(n log(n))</strong></li>
<li><span style="font-weight: 400;">Melhor caso: </span><strong>O(n*log n)~O(n</strong><sup><strong>1.25</strong></sup><strong>)</strong></li>
</ol>
      <div class="code">
      <div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; int h = 1;</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; int n = array.length;</div>
<br />
<div>&nbsp; &nbsp; &nbsp; &nbsp; while (h &lt; n) {</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; h = h * 3 + 1;</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; }</div>
<br />
<div>&nbsp; &nbsp; &nbsp; &nbsp; h = h / 3;</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; int c, j;</div>
<br />
<div>&nbsp; &nbsp; &nbsp; &nbsp; while (h &gt; 0) {</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; for (int i = h; i &lt; n; i++) {</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; c = array[i];</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; j = i;</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; while (j &gt;= h &amp;&amp; array[j - h] &gt; c) {</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; array[j] = array[j - h];</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; j = j - h;</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; array[j] = c;</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; h = h / 2;</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; }</div>
</div>
      </div>
      `,
    },
    {
      text: `<h2>Heap Sort</h2>
      <div class="img">
      <img src="img/HeapSort.gif" alt="" srcset="">
      </div> 
      <div>
      <p><span style="font-weight: 400;">Tem um desempenho em tempo de execu&ccedil;&atilde;o muito bom em conjuntos ordenados aleatoriamente, tem um uso de mem&oacute;ria bem comportado e o seu desempenho em pior cen&aacute;rio &eacute; praticamente igual ao desempenho em cen&aacute;rio m&eacute;dio. Alguns algoritmos de ordena&ccedil;&atilde;o r&aacute;pidos t&ecirc;m desempenhos espetacularmente ruins no pior cen&aacute;rio, quer em tempo de execu&ccedil;&atilde;o, quer no uso da mem&oacute;ria. O Heapsort trabalha no lugar e o tempo de execu&ccedil;&atilde;o em pior cen&aacute;rio para ordenar </span><em><span style="font-weight: 400;">n</span></em><span style="font-weight: 400;"> elementos &eacute; de </span><em><span style="font-weight: 400;">O(n log n)</span></em><span style="font-weight: 400;">. L&ecirc;-se logaritmo (ou log) de "</span><em><span style="font-weight: 400;">n</span></em><span style="font-weight: 400;">" na base 2. Para valores de </span><em><span style="font-weight: 400;">n</span></em><span style="font-weight: 400;">, razoavelmente grandes, o termo log </span><em><span style="font-weight: 400;">n </span></em><span style="font-weight: 400;">&eacute; quase constante, de modo que o tempo de ordena&ccedil;&atilde;o &eacute; quase linear com o n&uacute;mero de itens a ordenar.</span></p>
<ol>
<li style="font-weight: 400;"><span style="font-weight: 400;">Pior caso: </span><strong>O(n log n)</strong></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">M&eacute;dio caso: </span><strong>O(n log n)</strong></li>
<li><span style="font-weight: 400;">Melhor caso: </span><strong>O(n log n)</strong></li>
</ol>
      </div>
      <div class="code">
      <p><strong>public</strong> <strong>static</strong> <strong>void</strong> <strong>heapSort(</strong><strong>int</strong><strong>[] vetor){</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>tamanho</strong> <strong>=</strong> <strong>vetor</strong><strong>.</strong><strong>length</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>i</strong> <strong>=</strong><strong> tamanho </strong><strong>/</strong> <strong>2</strong><strong>,</strong><strong> pai</strong><strong>,</strong><strong> filho</strong><strong>,</strong><strong> t</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>while</strong> <strong>(</strong><strong>true</strong><strong>){</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>if</strong> <strong>(</strong><strong>i </strong><strong>&gt;</strong> <strong>0</strong><strong>){</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i</strong><strong>--</strong><strong>;</strong><strong> t </strong><strong>=</strong><strong> vetor</strong><strong>[</strong><strong>i</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}else{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tamanho</strong><strong>--</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>if</strong> <strong>(</strong><strong>tamanho </strong><strong>&lt;=</strong> <strong>0</strong><strong>)</strong> <strong>{return;}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t </strong><strong>=</strong><strong> vetor</strong><strong>[</strong><strong>tamanho</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vetor</strong><strong>[</strong><strong>tamanho</strong><strong>]</strong> <strong>=</strong><strong> vetor</strong><strong>[</strong><strong>0</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pai </strong><strong>=</strong><strong> i</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filho </strong><strong>=</strong> <strong>((</strong><strong>i </strong><strong>*</strong> <strong>2</strong><strong>)</strong> <strong>+</strong> <strong>1</strong><strong>);</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>while</strong> <strong>(</strong><strong>filho </strong><strong>&lt;</strong><strong> tamanho</strong><strong>){</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>if</strong> <strong>((</strong><strong>filho </strong><strong>+</strong> <strong>1</strong> <strong>&lt;</strong><strong> tamanho</strong><strong>)</strong> <strong>&amp;&amp;</strong> <strong>(</strong><strong>vetor</strong><strong>[</strong><strong>filho </strong><strong>+</strong> <strong>1</strong><strong>]</strong> <strong>&gt;</strong><strong> vetor</strong><strong>[</strong><strong>filho</strong><strong>]))</strong> <strong>{</strong><strong>filho</strong><strong>++</strong><strong>;}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>if</strong> <strong>(</strong><strong>vetor</strong><strong>[</strong><strong>filho</strong><strong>]</strong> <strong>&gt;</strong><strong> t</strong><strong>){</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vetor</strong><strong>[</strong><strong>pai</strong><strong>]</strong> <strong>=</strong><strong> vetor</strong><strong>[</strong><strong>filho</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pai </strong><strong>=</strong><strong> filho</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filho </strong><strong>=</strong><strong> pai </strong><strong>*</strong> <strong>2</strong> <strong>+</strong> <strong>1</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}else</strong> <strong>{break;}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vetor</strong><strong>[</strong><strong>pai</strong><strong>]</strong> <strong>=</strong><strong> t</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
      </div>`,
    },
    {
      text: `<h2>Radix Sort</h2>
      <div class="img">
      <img src="img/RadixSort.gif" alt="" srcset="">
      </div> 
      <div>
      <p><span style="font-weight: 400;">O Radix sort &eacute; um algoritmo de ordena&ccedil;&atilde;o r&aacute;pido e est&aacute;vel que pode ser usado para ordenar itens que est&atilde;o identificados por chaves &uacute;nicas. Cada chave &eacute; uma cadeia de caracteres ou n&uacute;mero, e o radix sort ordena estas chaves em qualquer ordem relacionada com a lexicografia.</span></p>
<p><span style="font-weight: 400;">Na ci&ecirc;ncia da computa&ccedil;&atilde;o, radix sort &eacute; um algoritmo de ordena&ccedil;&atilde;o que ordena inteiros processando d&iacute;gitos individuais. Como os inteiros podem representar strings compostas de caracteres (como nomes ou datas) e pontos flutuantes especialmente formatados, radix sort n&atilde;o &eacute; limitado somente a inteiros.</span></p>
<ol>
<li style="font-weight: 400;"><span style="font-weight: 400;">Pior caso: </span><strong>O(n+k)</strong></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">M&eacute;dio caso: </span><strong>O(n+k)</strong></li>
<li><span style="font-weight: 400;">Melhor caso: </span><strong>O(n+k)</strong></li>
</ol>
      </div>
      <div class="code">
      <p><strong>radixsort(array, n);</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong><strong>static</strong> <strong>int</strong> <strong>getMax(</strong><strong>int</strong><strong> arr[], </strong><strong>int</strong><strong> n)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>mx</strong> <strong>=</strong><strong> arr</strong><strong>[</strong><strong>0</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>for</strong> <strong>(</strong><strong>int</strong> <strong>i</strong> <strong>=</strong> <strong>1</strong><strong>;</strong><strong> i </strong><strong>&lt;</strong><strong> n</strong><strong>;</strong><strong> i</strong><strong>++</strong><strong>)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>if</strong> <strong>(</strong><strong>arr</strong><strong>[</strong><strong>i</strong><strong>]</strong> <strong>&gt;</strong><strong> mx</strong><strong>)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mx </strong><strong>=</strong><strong> arr</strong><strong>[</strong><strong>i</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>return</strong><strong> mx</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>static</strong> <strong>void</strong> <strong>countSort(</strong><strong>int</strong><strong> arr[], </strong><strong>int</strong><strong> n, </strong><strong>int</strong><strong> exp)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>output</strong><strong>[]</strong> <strong>=</strong> <strong>new</strong> <strong>int</strong><strong>[</strong><strong>n</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>i</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>count</strong><strong>[]</strong> <strong>=</strong> <strong>new</strong> <strong>int</strong><strong>[</strong><strong>10</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>Arrays</strong><strong>.fill(</strong><strong>count</strong><strong>,</strong> <strong>0</strong><strong>);</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>for</strong> <strong>(</strong><strong>i </strong><strong>=</strong> <strong>0</strong><strong>;</strong><strong> i </strong><strong>&lt;</strong><strong> n</strong><strong>;</strong><strong> i</strong><strong>++</strong><strong>)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count</strong><strong>[(</strong><strong>arr</strong><strong>[</strong><strong>i</strong><strong>]</strong> <strong>/</strong><strong> exp</strong><strong>)</strong> <strong>%</strong> <strong>10</strong><strong>]</strong><strong>++</strong><strong>;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>for</strong> <strong>(</strong><strong>i </strong><strong>=</strong> <strong>1</strong><strong>;</strong><strong> i </strong><strong>&lt;</strong> <strong>10</strong><strong>;</strong><strong> i</strong><strong>++</strong><strong>)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count</strong><strong>[</strong><strong>i</strong><strong>]</strong> <strong>+=</strong><strong> count</strong><strong>[</strong><strong>i </strong><strong>-</strong> <strong>1</strong><strong>];</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>for</strong> <strong>(</strong><strong>i </strong><strong>=</strong><strong> n </strong><strong>-</strong> <strong>1</strong><strong>;</strong><strong> i </strong><strong>&gt;=</strong> <strong>0</strong><strong>;</strong><strong> i</strong><strong>--</strong><strong>)</strong> <strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output</strong><strong>[</strong><strong>count</strong><strong>[(</strong><strong>arr</strong><strong>[</strong><strong>i</strong><strong>]</strong> <strong>/</strong><strong> exp</strong><strong>)</strong> <strong>%</strong> <strong>10</strong><strong>]</strong> <strong>-</strong> <strong>1</strong><strong>]</strong> <strong>=</strong><strong> arr</strong><strong>[</strong><strong>i</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count</strong><strong>[(</strong><strong>arr</strong><strong>[</strong><strong>i</strong><strong>]</strong> <strong>/</strong><strong> exp</strong><strong>)</strong> <strong>%</strong> <strong>10</strong><strong>]</strong><strong>--</strong><strong>;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>for</strong> <strong>(</strong><strong>i </strong><strong>=</strong> <strong>0</strong><strong>;</strong><strong> i </strong><strong>&lt;</strong><strong> n</strong><strong>;</strong><strong> i</strong><strong>++</strong><strong>)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr</strong><strong>[</strong><strong>i</strong><strong>]</strong> <strong>=</strong><strong> output</strong><strong>[</strong><strong>i</strong><strong>];</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>static</strong> <strong>void</strong> <strong>radixsort(</strong><strong>int</strong><strong> arr[], </strong><strong>int</strong><strong> n)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>{</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>int</strong> <strong>m</strong> <strong>=</strong> <strong>getMax(arr, n);</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>for</strong> <strong>(</strong><strong>int</strong> <strong>exp</strong> <strong>=</strong> <strong>1</strong><strong>;</strong><strong> m </strong><strong>/</strong><strong> exp </strong><strong>&gt;</strong> <strong>0</strong><strong>;</strong><strong> exp </strong><strong>*=</strong> <strong>10</strong><strong>)</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>countSort(arr, n, exp);</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>}</strong></p>
      </div>`,
    },
    {
      text: `<h2>Gnome Sort</h2>
      <div class="img">
      <img src="img/GnomeSort.gif" alt="" srcset="">
      </div> 
      <div>
      <p><span style="font-weight: 400;">Algoritmo similar ao Insertion sort com a diferen&ccedil;a que o Gnome sort leva um elemento para sua posi&ccedil;&atilde;o correta, com uma sequ&ecirc;ncia grande de trocas assim como o Bubble sort. O algoritmo percorre o vetor comparando seus elementos dois a dois, assim que ele encontra um elemento que est&aacute; na posi&ccedil;&atilde;o incorreta, ou seja, um n&uacute;mero maior antes de um menor, ele troca a posi&ccedil;&atilde;o dos elementos, e volta com este elemento at&eacute; que encontre o seu respectivo lugar.</span></p>
<ol>
<li style="font-weight: 400;"><span style="font-weight: 400;">Pior caso: </span><strong>&Theta;(n&sup2;)</strong></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">M&eacute;dio caso: </span><strong>&Theta;(n&sup2;)</strong></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Melhor caso: </span><strong>&Theta;(n&sup2;)</strong></li>
</ol>
      </div>
      <div class="code">
      <p><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">pivout</span> <span style="font-weight: 400;">=</span> <span style="font-weight: 400;">0</span><span style="font-weight: 400;">;</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">aux</span><span style="font-weight: 400;">;</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">while</span> <span style="font-weight: 400;">(</span><span style="font-weight: 400;">pivout </span><span style="font-weight: 400;">&lt;</span> <span style="font-weight: 400;">(</span><span style="font-weight: 400;">array</span><span style="font-weight: 400;">.</span><span style="font-weight: 400;">length</span> <span style="font-weight: 400;">-</span> <span style="font-weight: 400;">1</span><span style="font-weight: 400;">))</span> <span style="font-weight: 400;">{</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">if</span> <span style="font-weight: 400;">(</span><span style="font-weight: 400;">array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">pivout</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">&gt;</span><span style="font-weight: 400;"> array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">pivout </span><span style="font-weight: 400;">+</span> <span style="font-weight: 400;">1</span><span style="font-weight: 400;">])</span> <span style="font-weight: 400;">{</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aux </span><span style="font-weight: 400;">=</span><span style="font-weight: 400;"> array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">pivout</span><span style="font-weight: 400;">];</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">pivout</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">=</span><span style="font-weight: 400;"> array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">pivout </span><span style="font-weight: 400;">+</span> <span style="font-weight: 400;">1</span><span style="font-weight: 400;">];</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">pivout </span><span style="font-weight: 400;">+</span> <span style="font-weight: 400;">1</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">=</span><span style="font-weight: 400;"> aux</span><span style="font-weight: 400;">;</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">if</span> <span style="font-weight: 400;">(</span><span style="font-weight: 400;">pivout </span><span style="font-weight: 400;">&gt;</span> <span style="font-weight: 400;">0</span><span style="font-weight: 400;">)</span> <span style="font-weight: 400;">{</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pivout </span><span style="font-weight: 400;">-=</span> <span style="font-weight: 400;">2</span><span style="font-weight: 400;">;</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">}</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">}</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pivout</span><span style="font-weight: 400;">++</span><span style="font-weight: 400;">;</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">}</span></p>
      </div>`,
    },
    {
      text: `<h2>Counting Sort</h2>
      <div class="img">
      <img src="img/CountingSort.gif" alt="" srcset="">
      </div> 
      <div>
      <p><span style="font-weight: 400;">Counting sort &eacute; um algoritmo de ordena&ccedil;&atilde;o est&aacute;vel cuja complexidade &eacute; O(n). As chaves podem tomar valores entre 0 e M-1. Se existirem k0 chaves com valor 0, ent&atilde;o ocupam as primeiras k0 posi&ccedil;&otilde;es do vetor final: de 0 a k0-1.</span></p>
<p><span style="font-weight: 400;">A ideia b&aacute;sica do counting sort &eacute; determinar, para cada entrada x, o n&uacute;mero de elementos menor que x. Essa informa&ccedil;&atilde;o pode ser usada para colocar o elemento x diretamente em sua posi&ccedil;&atilde;o no array de sa&iacute;da. Por exemplo, se h&aacute; 17 elementos menores que x, ent&atilde;o x pertence a posi&ccedil;&atilde;o 18. Esse esquema deve ser ligeiramente modificado quando houver v&aacute;rios elementos com o mesmo valor, uma vez que n&oacute;s n&atilde;o queremos que sejam colocados na mesma posi&ccedil;&atilde;o.</span></p>
<ol>
<li style="font-weight: 400;"><span style="font-weight: 400;">Pior caso: </span><strong>O(n+k)</strong></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">M&eacute;dio caso: </span><strong>O(n+k)</strong></li>
<li><span style="font-weight: 400;">Melhor caso: </span><strong>O(n+k)</strong></li>
</ol>
      </div>
      <div class="code">
      <p><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">max</span> <span style="font-weight: 400;">=</span> <span style="font-weight: 400;">Arrays</span><span style="font-weight: 400;">.stream(</span><span style="font-weight: 400;">array</span><span style="font-weight: 400;">).max().getAsInt();</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">min</span> <span style="font-weight: 400;">=</span> <span style="font-weight: 400;">Arrays</span><span style="font-weight: 400;">.stream(</span><span style="font-weight: 400;">array</span><span style="font-weight: 400;">).min().getAsInt();</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">range</span> <span style="font-weight: 400;">=</span><span style="font-weight: 400;"> max </span><span style="font-weight: 400;">-</span><span style="font-weight: 400;"> min </span><span style="font-weight: 400;">+</span> <span style="font-weight: 400;">1</span><span style="font-weight: 400;">;</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">count</span><span style="font-weight: 400;">[]</span> <span style="font-weight: 400;">=</span> <span style="font-weight: 400;">new</span> <span style="font-weight: 400;">int</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">range</span><span style="font-weight: 400;">];</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">output</span><span style="font-weight: 400;">[]</span> <span style="font-weight: 400;">=</span> <span style="font-weight: 400;">new</span> <span style="font-weight: 400;">int</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">array</span><span style="font-weight: 400;">.</span><span style="font-weight: 400;">length</span><span style="font-weight: 400;">];</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">for</span> <span style="font-weight: 400;">(</span><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">i</span> <span style="font-weight: 400;">=</span> <span style="font-weight: 400;">0</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i </span><span style="font-weight: 400;">&lt;</span> <span style="font-weight: 400;">array</span><span style="font-weight: 400;">.</span><span style="font-weight: 400;">length</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i</span><span style="font-weight: 400;">++</span><span style="font-weight: 400;">)</span> <span style="font-weight: 400;">{</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">i</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">-</span><span style="font-weight: 400;"> min</span><span style="font-weight: 400;">]</span><span style="font-weight: 400;">++</span><span style="font-weight: 400;">;</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">}</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">for</span> <span style="font-weight: 400;">(</span><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">i</span> <span style="font-weight: 400;">=</span> <span style="font-weight: 400;">1</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i </span><span style="font-weight: 400;">&lt;</span> <span style="font-weight: 400;">count</span><span style="font-weight: 400;">.</span><span style="font-weight: 400;">length</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i</span><span style="font-weight: 400;">++</span><span style="font-weight: 400;">)</span> <span style="font-weight: 400;">{</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">i</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">+=</span><span style="font-weight: 400;"> count</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">i </span><span style="font-weight: 400;">-</span> <span style="font-weight: 400;">1</span><span style="font-weight: 400;">];</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">}</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">for</span> <span style="font-weight: 400;">(</span><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">i</span> <span style="font-weight: 400;">=</span> <span style="font-weight: 400;">array</span><span style="font-weight: 400;">.</span><span style="font-weight: 400;">length</span> <span style="font-weight: 400;">-</span> <span style="font-weight: 400;">1</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i </span><span style="font-weight: 400;">&gt;=</span> <span style="font-weight: 400;">0</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i</span><span style="font-weight: 400;">--</span><span style="font-weight: 400;">)</span> <span style="font-weight: 400;">{</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">count</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">i</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">-</span><span style="font-weight: 400;"> min</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">-</span> <span style="font-weight: 400;">1</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">=</span><span style="font-weight: 400;"> array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">i</span><span style="font-weight: 400;">];</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">i</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">-</span><span style="font-weight: 400;"> min</span><span style="font-weight: 400;">]</span><span style="font-weight: 400;">--</span><span style="font-weight: 400;">;</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">}</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">for</span> <span style="font-weight: 400;">(</span><span style="font-weight: 400;">int</span> <span style="font-weight: 400;">i</span> <span style="font-weight: 400;">=</span> <span style="font-weight: 400;">0</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i </span><span style="font-weight: 400;">&lt;</span> <span style="font-weight: 400;">array</span><span style="font-weight: 400;">.</span><span style="font-weight: 400;">length</span><span style="font-weight: 400;">;</span><span style="font-weight: 400;"> i</span><span style="font-weight: 400;">++</span><span style="font-weight: 400;">)</span> <span style="font-weight: 400;">{</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">i</span><span style="font-weight: 400;">]</span> <span style="font-weight: 400;">=</span><span style="font-weight: 400;"> output</span><span style="font-weight: 400;">[</span><span style="font-weight: 400;">i</span><span style="font-weight: 400;">];</span></p>
<p><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-weight: 400;">}</span></p>
      </div>`,
    },
  ];
