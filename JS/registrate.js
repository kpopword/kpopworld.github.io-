var phone = document.getElementById("phone");
var email = document.getElementById("email");
var error = document.getElementById("error");
error.style.color="red";

function enviarFormulario(){
    console.log('Enviando');
    var mensajesError = [];

    if(phone.value === null || phone.value === ""){
        mensajesError.push('Ingresa el Telefono');
    }else if(email.value === null || email.value === ""){
        mensajesError.push('Ingresa el correo');
    }else{
        mensajesError.push('formulario enviado con exito');
    }

        error.innerHTML = mensajesError.join(", ");
        return false;
}