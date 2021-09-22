export const checkMode = () => {
    const modeStatus = JSON.parse(localStorage.getItem('darkMode')) ; 
    if( !modeStatus ) {
          button.classList.add('active');
        whiteMode();
    }else{

        button.classList.remove('active');
        darkMode();

    }
}


const button = document.querySelector('.button-switch');
export const darkMode = () => {
    const body = document.querySelector('.body');
    body.classList.add('bodyDark');   
}
export const whiteMode = () => {
    const body = document.querySelector('.body');
    body.classList.remove('bodyDark');
}