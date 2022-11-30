const sideBar = document.getElementById('sidebar'),
showMenu = document.querySelector('#btn-menu span'),
subMenu = document.querySelectorAll('.submenu'),
subItems = document.querySelectorAll('.subitem'),
btnsExpand = document.querySelectorAll('.expand span'),
btnLad = document.querySelector('#btn-lad span'), 
lateral = document.querySelector('.lateral'),
meuIframe = document.getElementById('iframe'),
btnsSub = document.querySelectorAll('.btnSub');


showMenu.addEventListener("click", ()=>{
    if(showMenu.innerText == "menu"){
        showMenu.innerText = "close";
    } else {
        showMenu.innerText = "menu";
    }
    showMenu.parentElement.classList.toggle("show");
    showMenu.parentElement.nextElementSibling.classList.toggle("show");
    sideBar.classList.toggle("show");
})

for(const btnExpand of btnsExpand) {
    btnExpand.parentElement.parentElement.addEventListener("click", ()=>{
        btnExpand.parentElement.parentElement.nextElementSibling.classList.toggle("show");
        btnExpand.parentElement.parentElement.classList.toggle("clicked");
    })
}

subItems.forEach(subItem => {
    subItem.addEventListener('click', ()=>{
        subItems.forEach(subItem =>{subItem.classList.remove('selected');})
        subItem.classList.add('selected');
    })
});

btnLad.addEventListener("click", ()=>{
    if(btnLad.innerText == "keyboard_double_arrow_right"){
        btnLad.innerText = "keyboard_double_arrow_left";
    } else {
        btnLad.innerText = "keyboard_double_arrow_right";
    }
    lateral.classList.toggle("show");
})

btnsSub.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        const data = btn.parentElement.parentElement.parentElement.getAttribute('id');
        console.log(data);

        meuIframe.onload = () => {
            meuIframe.contentWindow.postMessage(data, '*');
        }
    })
});
