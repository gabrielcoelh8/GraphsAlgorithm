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
    showMenu.parentElement.nextElementSibling.firstChild.classList.toggle("show");
})

for(const btnExpand of btnsExpand) {
    btnExpand.parentElement.parentElement.addEventListener("click", ()=>{
        btnExpand.parentElement.parentElement.nextElementSibling.classList.toggle("show");
        btnExpand.parentElement.classList.toggle("clicked");
    })
}


