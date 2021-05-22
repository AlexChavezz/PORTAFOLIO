'use strict';

function myFunction(x) {
    x.classList.toggle("change");
}


const menu = document.createElement('div');
menu.className = 'menuScreen';

const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.classList.contains("bar4")){
        menu.style.display = 'block';
        const body = document.querySelector('.menuComplete');
        body.appendChild(menu);
        e.target.className = 'bar-4';
    }else{
        menu.style.display = 'none';
        e.target.className = 'bar4';
    }


    // const list = document.getElementById('header-list');
    // list.style.display = 'block';
});