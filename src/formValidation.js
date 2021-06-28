// -> Whit this function we get a values from inputs <-
function getValues() {
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const message = document.querySelector('.textarea');

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
function clearCamps(element) {
    element.value =  '';
}

export const validation = document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const values = getValues();
    values.forEach( element => {
        if (element.value.trim() === '') {
            invalideInput(element);
        } else {
            valideInput(element);
            clearCamps(element);
        }
    });
});

/* Form Validation name */

document.querySelector('.name').addEventListener('keyup', () => {
    const name = document.querySelector('.name');

    if (name.value === '') {
        name.style.border = '1px solid #ccc';
    } else if (name.value.length > 2) {
        name.style.border = '1px solid #007a00'
    } else {
        name.style.border = '1px solid #900';
    }
});


