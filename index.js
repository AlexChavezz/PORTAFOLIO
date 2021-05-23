'use strict';

function myFunction(x) {
    x.classList.toggle("change");
}

const menuList = document.querySelector('#header-list');

function clearVarNav(e) {
    menuList.style.display = 'none';
    e.target.className = 'bar4'
}
function hiddenVarNav() {
    const menu = document.querySelector('.bar-4');
    menu.className = "bar4";
    menuList.style.display = 'none';
    const container = document.querySelector('.container');
    container.classList.remove('change');
}
function showVarNav(e) {
    menuList.style.display = 'block';
    e.target.className = 'bar-4';
}


const menu = document.querySelector('.container').addEventListener('click', (e) => {

    if (e.target.classList.contains('bar4')) {
        showVarNav(e);
    } else {
        clearVarNav(e);
    }

    
});
const listMenu = document.querySelectorAll('.list-group');
for (let i = 0; i < listMenu.length; i++) {
    listMenu[i].addEventListener('click', () => {
        hiddenVarNav();
    });
}
