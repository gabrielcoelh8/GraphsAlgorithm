const menu = document.querySelector('.menu');


let element = 
`<div id="sidebar" class="show">

<!-- topo -->

  <div class="text-menu">
    <span>Algoritmos de Ordenação</span>
  </div>

<!-- introdução -->

<div class="option-submenu">
<div class="option">
  <span class="label">Introdução</span>
  <div class="button expand clicked">
    <span class="material-symbols-outlined">expand_more</span>
  </div>
</div>
<div class="submenu show">
  <ul>
  <li class="subitem">
    <span class="label">
      <a href="page2.html">Tabela geral</a>
    </span>
    <span class="material-symbols-outlined">dataset</span>
  </li>
  <li class="subitem">
    <span class="label">
      <a href="index.html">Gráfico geral</a></span>
    <span class="material-symbols-outlined">dataset</span>
  </li>
  </ul>
</div>
</div>

<!-- BubbleSort -->

<div class="option-submenu">
<div class="option">
  <span class="label">BubbleSort</span>
  <div class="button expand">
    <span class="material-symbols-outlined">expand_more</span>
  </div>
</div>
<div class="submenu">
  <ul>
  <li class="subitem">
    <span class="label"><a href="Tabela_Bubble.html">Tabela</a></span>
    <span class="material-symbols-outlined">dataset</span>
  </li>
  <li class="subitem">
    <span class="label"><a href="Grafico_Bubble.html">Gráfico</a></span>
    <span class="material-symbols-outlined">dataset</span>
  </li>
  </ul>
</div>
</div>

<!-- InsertionSort -->

<div class="option-submenu">
  <div class="option">
    <span class="label">InsertionSort</span>
    <div class="button expand">
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </div>
  <div class="submenu">
    <ul>
    <li class="subitem">
      <span class="label"><a href="Tabela_Insertion.html">Tabela</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    <li class="subitem">
      <span class="label"><a href="Grafico_Insertion.html">Gráfico</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    </ul>
  </div>
</div>

<!-- MergeSort -->

<div class="option-submenu">
  <div class="option">
    <span class="label">MergeSort</span>
    <div class="button expand">
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </div>
  <div class="submenu">
    <ul>
    <li class="subitem">
      <span class="label"><a href="Tabela_Merge.html">Tabela</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    <li class="subitem">
      <span class="label"><a href="Grafico_Merge.html">Gráfico</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    </ul>
  </div>
</div>

<!-- QuickSort -->

<div class="option-submenu">
  <div class="option">
    <span class="label">QuickSort</span>
    <div class="button expand">
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </div>
  <div class="submenu">
    <ul>
    <li class="subitem">
      <span class="label"><a href="page3.html">Tabela</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    <li class="subitem">
      <span class="label"><a href="page4.html">Gráfico</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    </ul>
  </div>
</div>

<!-- ShellSort -->

<div class="option-submenu">
  <div class="option">
    <span class="label">ShellSort</span>
    <div class="button expand">
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </div>
  <div class="submenu">
    <ul>
    <li class="subitem">
      <span class="label"><a href="page3.html">Tabela</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    <li class="subitem">
      <span class="label"><a href="page4.html">Gráfico</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    </ul>
  </div>
</div>

<!-- HeapSort -->

<div class="option-submenu">
  <div class="option">
    <span class="label">HeapSort</span>
    <div class="button expand">
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </div>
  <div class="submenu">
    <ul>
    <li class="subitem">
      <span class="label"><a href="page3.html">Tabela</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    <li class="subitem">
      <span class="label"><a href="page4.html">Gráfico</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    </ul>
  </div>
</div>

<!-- RidixSort -->

<div class="option-submenu">
  <div class="option">
    <span class="label">RadixSort</span>
    <div class="button expand">
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </div>
  <div class="submenu">
    <ul>
    <li class="subitem">
      <span class="label"><a href="page3.html">Tabela</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    <li class="subitem">
      <span class="label"><a href="page4.html">Gráfico</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    </ul>
  </div>
</div>

<!-- GnomeSort -->

<div class="option-submenu">
  <div class="option">
    <span class="label">GnomeSort</span>
    <div class="button expand">
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </div>
  <div class="submenu">
    <ul>
    <li class="subitem">
      <span class="label"><a href="page3.html">Tabela</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    <li class="subitem">
      <span class="label"><a href="page4.html">Gráfico</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    </ul>
  </div>
</div>

<!-- CountingSort -->

<div class="option-submenu">
  <div class="option">
    <span class="label">CountingSort</span>
    <div class="button expand">
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </div>
  <div class="submenu">
    <ul>
    <li class="subitem">
      <span class="label"><a href="page3.html">Tabela</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    <li class="subitem">
      <span class="label"><a href="page4.html">Gráfico</a></span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    </ul>
  </div>
</div>

</div>`;

menu.innerHTML += element;