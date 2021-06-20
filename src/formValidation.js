
function getValues() {
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.textarea').value;

    return [name, email, message];
}
function inputBorders(value, color) {
    const elements = document.querySelectorAll('.input');
    elements.forEach(element => {
        if (element.value === value) {
            element.style.border = `1px solid ${color}`;
        }
    });
}
function invalideInput(value) {
    inputBorders(value, '#900');
}
function valideInput(value) {
    inputBorders(value, '#007a00');
}
function clearCamps() {
    const name = document.querySelector('.name').value;
    name === '';
    const email = document.querySelector('.emai').value;
    name === '';
    const textarea = document.querySelector('.textarea').value;
    name === '';
    /*
    const elements = document.querySelectorAll('.input');
    elements.forEach(element => {
        console.log(element)
        element.value === value? element.value === '' : console.log('no funciona bro :(');
    });*/
}
export const validation = document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const values = getValues();
    console.log(values);
    values.map(value => {
        if (value.trim() === '') {
            invalideInput(value);
        } else {
            valideInput(value);
        }
    });
});

/* Form Validation name */

document.querySelector('.name').addEventListener('keyup', () => {
    const name = document.querySelector('.name');

    if( name.value === '' ){
        name.style.border = '1px solid #ccc';
    }else if( name.value.length > 2 ){
        name.style.border = '1px solid #007a00'
    }else{
        name.style.border = '1px solid #900';
    }
});

