import { checkMode, darkMode, whiteMode } from './darkMode.js';
import ValidationForm from './formValidation.js';

// const validation = new ValidationForm();

// document.addEventListener('DOMContentLoaded',validation.validateCaptcha());
checkMode();

class VarNav{
    constructor(){
        this.menu = document.querySelector('#header-list');
    }
    showNav(){
        this.menu.style.display = 'block';
    }
    hiddeNav(){
        this.menu.style.display = 'none';
    }
}

 // -> This events make to touch a responsive bar nav succesfull  <-
const bar = document.querySelectorAll('.bar');
bar.forEach( bar =>{
    const menu = document.querySelector('.container');
    const varNav = new VarNav();
    bar.addEventListener('click', () => {
        
        if(menu.classList.contains('change')){
            menu.classList.remove('change');
            varNav.hiddeNav();
        }else{
            menu.classList.add('change'); 
            varNav.showNav();
        }
    });
});
const listMenu = document.querySelectorAll('.list-group');
listMenu.forEach(list => {
    list.addEventListener('click', () => {
        document.querySelector('.container').classList.remove('change');
        if(window.screen.width < 714){
            new VarNav().hiddeNav();
        }
    });
});

const button = document.querySelector('.button-switch');
button.addEventListener('click', () => {

    const status = JSON.parse(localStorage.getItem('darkMode'));

    if (  button.classList.contains('active') ){
        button.classList.remove('active');
        localStorage.setItem('darkMode', !status);
        darkMode();
    }else{
        button.classList.add('active');
        localStorage.setItem('darkMode', !status);
        whiteMode();
    }
});

// -> Form Validation

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const validation = new ValidationForm();
    const isValidate = validation.validateFields();
    if( isValidate ){
        
    }else{
        validation.fieldEmptyStyles();
        validation.alert();
    }
});

