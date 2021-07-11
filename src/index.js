'use strict';
import { validation } from './formValidation.js';

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
        new VarNav().hiddeNav();
        document.querySelector('.container').classList.remove('change');
    });
});
