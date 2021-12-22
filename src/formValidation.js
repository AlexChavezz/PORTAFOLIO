
class ValidationForm {

    constructor() {
        this.isValidate = false;
    }

    getRefsInputs() {

        const nameInput = document.querySelector('#name-input');
        const emailInput = document.querySelector('#email-input');
        const textArea = document.querySelector('#textarea');

        return [nameInput, emailInput, textArea];
    }

    get isValidateGet() {
        return this.isValidate;
    }
    getNumbers() {
        return {
            n1: num
        }
    }
    validateFields() {
        let isValidate = false;
        const [name, email, textArea] = this.getRefsInputs();

        if (name.value.trim().length > 0 && email.value.trim().length > 0 && textArea.value.trim().length > 0) {
            return true;
        }
        return isValidate;
    }
    fieldEmptyStyles() {
        const inputRefs = this.getRefsInputs();
        inputRefs.forEach(inputRef => {
            if (inputRef.value.trim().length === 0) {
                inputRef.style.boxShadow = 'rgb(0 0 0 / 16%) 0px 1px 4px, rgb(197 39 39) 0px 0px 0px 3px';
                inputRef.classList.add('field-empty');
                setTimeout(() => {
                    inputRef.classList.remove('field-empty');
                }, 200);
            } else {
                inputRef.style.boxShadow = 'none';
                inputRef.classList.remove('field-empty');
            }
        });
    }
    alert(){
        const alertDiv = document.querySelector('.alert');
        alertDiv.style.display = 'flex';
        alertDiv.textContent = 'All field are required';
        setTimeout(() => {
            alertDiv.style.display = 'none';
        }, 1500);
    }
};

export default ValidationForm;