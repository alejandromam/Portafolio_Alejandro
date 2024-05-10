//Haz tú validación en javascript acá

const formContac = document.getElementById("form");
const inputsName = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const inputsMensaje = document.getElementById('asunto');
const formText = document.querySelector('.formcontato__textarea');

function enviarValidacion (){ 
     

    let validation = true;

    if(inputsName.value.trim() === ''){
        inputsName.value = 'Por favor, ingresa tu nombre';
        inputsName.style.color = 'red';
        validation = false;
    }

    if(inputEmail.value.trim() === ''){
        inputEmail.value = 'Por favor, ingresa su email';
        inputEmail.style.color = 'red';
        validation = false;
    }

    if(inputsMensaje.value.trim() === ''){
        inputsMensaje.value = 'Por favor, ingresa un asunto';
        inputsMensaje.style.color = 'red';
        validation = false;
    }

    if(formText.value.trim() === ''){
        formText.value = 'Por favor, ingresa un mensaje';
        formText.style.color = 'red';
        validation = false;
    }

    if (!validation) {

    } else {
        console.log('El formulario se envió correctamente.');
        formContac.submit(); 
    }

    enviarValidacion;
}

function borrarDatos(){
    inputsName.value = '';
    inputEmail.value = '';
    inputsMensaje.value = '';
    formText.value = '';
}