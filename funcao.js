const sideBar = document.getElementById('sidebar'),
showMenu = document.querySelector('#btn-menu'),
subMenu = document.querySelectorAll('.submenu'),
btnsExpand = document.querySelectorAll('.expand span');


showMenu.addEventListener("click", ()=>{
    if(showMenu.innerText == "menu"){
        showMenu.innerText = "close";
    } else {
        showMenu.innerText = "menu";
    }
    showMenu.classList.toggle("show");
    showMenu.parentElement.nextElementSibling.classList.toggle("show");
})

for(const btnExpand of btnsExpand) {
    btnExpand.parentElement.parentElement.addEventListener("click", ()=>{
        btnExpand.parentElement.parentElement.nextElementSibling.classList.toggle("show");
        btnExpand.parentElement.classList.toggle("clicked");
    })
}

function draw() {
    sideBar.innerHTML += `<div class="text-menu">
    <span>Algoritmos de Ordenação</span>
  </div>

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
      <span class="label">Tabela</span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    <li class="subitem">
      <span class="label">Gráfico</span>
      <span class="material-symbols-outlined">dataset</span>
    </li>
    </ul>
  </div>
  </div>

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
        <span class="label">Tabela</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      <li class="subitem">
        <span class="label">Gráfico</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      </ul>
    </div>
  </div>

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
        <span class="label">Tabela</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      <li class="subitem">
        <span class="label">Gráfico</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      </ul>
    </div>
  </div>

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
        <span class="label">Tabela</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      <li class="subitem">
        <span class="label">Gráfico</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      </ul>
    </div>
  </div>

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
        <span class="label">Tabela</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      <li class="subitem">
        <span class="label">Gráfico</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      </ul>
    </div>
  </div>

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
        <span class="label">Tabela</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      <li class="subitem">
        <span class="label">Gráfico</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      </ul>
    </div>
  </div>

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
        <span class="label">Tabela</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      <li class="subitem">
        <span class="label">Gráfico</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      </ul>
    </div>
  </div>

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
        <span class="label">Tabela</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      <li class="subitem">
        <span class="label">Gráfico</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      </ul>
    </div>
  </div>

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
        <span class="label">Tabela</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      <li class="subitem">
        <span class="label">Gráfico</span>
        <span class="material-symbols-outlined">dataset</span>
      </li>
      </ul>
    </div>`;
}

