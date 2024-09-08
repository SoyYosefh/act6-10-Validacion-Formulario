function validateForm() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var valid = true;

    // Validar formato de correo electrónico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Por favor, ingresa un correo válido.";
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validar longitud de la contraseña
    if (password.length < 8) {
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (valid) {
        alert("Formulario enviado correctamente");
    }

    return valid; // Retorna true si es válido, false si hay errores
}
