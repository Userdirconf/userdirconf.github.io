function validarFormulario() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    if (email === "") {
        alert("Por favor, ingrese su correo electrónico.");
        return false;
    }

    if (subject === "") {
        alert("Por favor, ingrese un asunto.");
        return false;
    }

    if (message === "") {
        alert("Por favor, ingrese un mensaje.");
        return false;
    }

    return true;
}
