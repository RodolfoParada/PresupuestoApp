boton1 = document.getElementById('btn-enviar-submit');
boton2 = document.getElementById('btn-anadir-submit');

boton1.addEventListener("click", function () {
    if (datogasto.value == "") {
        return datogasto.innerHTML = "Por favor ingresar el correo electrónico "
    }
    if (txtPassword.value == "") {
        return msgPassword.innerHTML = "Por favor ingresar la contraseña "
    }

    console.log("Correo", txtEmail.value, )
    console.log("Password ", txtPassword.value, )
    // alert("Presionaron click en este botón")
    alert(`${datogasto.value}`)
})