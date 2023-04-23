boton1 = document.getElementById('btn-enviar-submit');
boton2 = document.getElementById('btn-anadir-submit');

boton1.addEventListener("click", function () {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    alert(Json.stringify(data))
})