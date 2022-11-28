export let bubbleSort = [
    [0.000001, 0.000417, 0.00034, 0.000964],            
    [0.006738, 0.142355, 512.679436, 2388.123164],      
    [0.006474, 0.042532, 343.220966, 1348.68849]        
],
    selectionSort = [
    [0.001229, 0.013715, 31.742696, 129.775622],        
    [0.001274, 0.100288, 248.859193, 306.107902],       
    [0.001085, 0.103675, 265.357151, 435.939282]        
],
    insertionSort = [
    [0.000044, 0.000017, 0.001557, 0.001852],            
    [0.003258, 0.009565, 23.970349, 94.736178],         
    [0.000923, 0.018965, 46.574507, 194.466472]        
],
    mergeSort = [
    [0.000045, 0.000713, 0.034247, 0.070706],          
    [0.000905, 0.001557, 0.073101, 0.125868],          
    [0.00005, 0.000476, 0.028764, 0.055902]           
],
    quickSort = [
    [0.000608, 0.041383, 27.310097, 115.109891],       
    [0.000099, 0.00082, 0.046062, 0.08672],            
    [0.000498, 0.045557, 86.76409, 374.190479]         
],
    shellSort = [
    [0.000247, 0.002571, 0.009663, 0.009919],           
    [0.000789, 0.002191, 0.084805, 0.181332],           
    [0.000019, 0.000264, 0.01696, 0.03305]              
],
    heapSort = [
    [0.000505, 0.003512, 0.035701, 0.066787],           
    [0.00007, 0.001057, 0.062128, 0.128654],           
    [0.000055, 0.000538, 0.036278, 0.073219]           
],
    radixSort = [
    [0.000304, 0.000779, 0.041191, 0.08174],            
    [0.000403, 0.001673, 0.040895, 0.0938],             
    [0.000382, 0.000916, 0.041909, 0.08783]             
],
    gnomeSort = [
    [0.000004, 0.000011, 0.000569, 0.001151],           
    [0.000911, 0.051307, 128.786572, 558.915672],       
    [0.001247, 0.102252, 267.839367, 1109.643701]       
],
    countingSort = [
    [0.000646, 0.001959, 0.022714, 0.013296],          
    [0.000305, 0.002076, 0.017242, 0.038045],          
    [0.000295, 0.00116, 0.022784, 0.020415]            
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
    [0.000295, 0.00116, 0.022784, 0.020415]
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
    [0.000305, 0.002076, 0.017242, 0.038045]
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
    [0.000646, 0.001959, 0.022714, 0.013296]
],
textSort = [
{
    text: `<h2>Algoritmos de Ordenação</h2>
    <p>
      Um tipo de algoritmo muito usado na resolução de problemas computacionais são os algoritmos de ordenação, que servem para ordenar/organizar uma lista de números ou palavras de acordo com a sua necessidade. As linguagens de programação já possuem métodos de ordenação, mas é bom saber como funcionam os algoritmos, pois há casos de problemas em que o algoritmo de ordenação genérico não resolve, às vezes é necessário modificá-lo.
    </p>
    <img src="img/img-1.webp" alt="" srcset="">`
    },
{
    text: `<h2>Bubble Sort (Melhorado)</h2>
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
    <img src="img/burbbleSort_Ex.png" alt="" srcset="">`
    },
{
    text: `<h2>Selection Sort</h2>`
    },
{
    text: `<h2>Insertion Sort</h2>`
    },
{
    text: `<h2>Merge Sort</h2>`
    },
{
    text: `<h2>Quick Sort</h2>`
    },
{
    text: `<h2>Shell Sort</h2>`
    },
{
    text: `<h2>Heap Sort</h2>`
    },
{
    text: `<h2>Radix Sort</h2>`
    },
{
    text: `<h2>Gnome Sort</h2>`
    },
{
    text: `<h2>Counting Sort</h2>`
    }
];