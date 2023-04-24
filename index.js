const Gastos = [];



function mostrarPresupuesto() {

    const presupuesto = document.getElementById("dato-presupuesto").value;

    const respuesta = document.getElementById("valorUno");
    respuesta.textContent = `${presupuesto}`


    let saldo = document.getElementById("dato-presupuesto").value;


    const respuesta2 = document.getElementById("valorTres");
    respuesta2.textContent = `${saldo}`
}


function mostrarGastos() {
    let datogasto = document.getElementById("datogasto").value;
    let gastogasto = document.getElementById("gasto-gasto").value;



    const respuestaUno = document.getElementById("valorCuatro");
    respuestaUno.textContent = `${datogasto}`

    const respuestaDos = document.getElementById("valorCinco");
    respuestaDos.textContent = `${gastogasto}`


    let datos = document.getElementById("gasto-gasto").value;
    console.log(datos)

    const respuesta1 = document.getElementById("valorDos");
    respuesta1.textContent = `${datos}`





}