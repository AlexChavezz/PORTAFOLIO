'use strict';

function myFunction(x) {
    x.classList.toggle("change");
}


const menuList =  document.querySelector('#header-list');
const menu = document.querySelector('.container').addEventListener('click', (e) => {
    
   if(e.target.classList.contains('bar4')){
    menuList.style.display = 'block';
    e.target.className = 'bar-4';
   }else{
    menuList.style.display = 'none';
    e.target.className = 'bar4'
   }
   
    
});