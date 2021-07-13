const button = document.querySelector('.button-switch');
button.addEventListener('click', () =>{
    if( button.classList.contains('active') ){
        ( button.classList.remove('active') ) 
        getContainers2();
    }else{

        ( button.classList.add('active') )
        getContainers();
    } 
});

function getContainers(){
    const body = document.querySelector('.body');
    body.style.background = '#0f0f0f';
    body.style.color = 'white'

    const submit =  document.querySelector('#submit');
    submit.classList.add('submitChange')
}
function getContainers2(){
    const body = document.querySelector('.body');
    body.style.background = 'white';
    body.style.color = '#181818'

    const submit =  document.querySelector('#submit');
    submit.classList.remove('submitChange');
}