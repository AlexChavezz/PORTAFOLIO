'use strict';
import { validation } from './formValidation.js';

const menuLogo = document.querySelector('.bar4').addEventListener('click', (e) => {
    
    const menu = document.querySelector('.container');
    
    if(menu.classList.contains('change')){
        menu.classList.remove('change');
    }else{
        menu.classList.add('change');
    }

});

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


document.querySelector('.form').addEventListener('submit', handleSubmit);

async function handleSubmit(e){
    
    const form = new FormData(this);
    console.log(form);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Acept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset();
        alert('Gracias por contactarme');
    }
}
/*

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const camposValidations = new Validation();
    const inputName = document.querySelector('.name').value;
    const inputEmail = document.querySelector('.email').value;
    const inputTextArea = document.querySelector('.textarea').value;

    if(inputName === '' && inputEmail === '' && inputTextArea === ''){
        camposValidations.camposRequired();
    }else{
        camposValidations.allCampschecked();
        camposValidations.clearCamps();
    }
});
*/
