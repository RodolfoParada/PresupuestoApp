$(document).ready(function () {
    var valores = {
        presupuesto: $("#valorUno").val(),
        gastos: $("#valorDos").val(),
        saldo: $("#valorTres").val(),
    }
    var gastos = [];

    $("#btn-enviar-submit").on("click", function () {

        const agregarPresupuesto = $("#dato-presupuesto").val();
        if (agregarPresupuesto === undefined || agregarPresupuesto <= 0) {
            alert("Debe ingresar un presupuesto positivo mayor que 0");
            return;
        }
        Presupuesto(parseInt(agregarPresupuesto));
        $("#dato-presupuesto").val("");
    });


    $("#btn-anadir-submit").on("click", function () {
        let nombreGasto = $("#datogasto").val();
        let gastosPorAgregar = $("#gasto-gasto").val();
        if (nombreGasto === undefined || nombreGasto === "" || nombreGasto === null || gastosPorAgregar === undefined || gastosPorAgregar <= 0) {
            alert("Debe ingresar un nombre y un valor de gasto positivo mayor que 0");
            return;
        }
        let g = agregarGasto(parseInt(gastosPorAgregar));
        if (g.success) {
            gastos.push({
                nombre: nombreGasto,
                valor: gastosPorAgregar
            });
            actualizarTabla();
            $("#datogasto").val("");
            $("#gasto-gasto").val("");
        }
    });


    const agregarGasto = (gasto) => {
        if (valores.presupuesto === "" || valores.presupuesto === undefined || valores.presupuesto === null) {
            alert("No puede agregar un gasto si no tiene presupuesto");
            return {
                success: false,
                message: "No puede agregar un gasto si no tiene presupuesto"
            };
        }
        if (gastos.length === 0) {
            if (valores.presupuesto < parseInt(gasto)) {
                alert("Presupuesto inicial insuficiente");
                return {
                    success: false,
                    message: "No puede agregar un gasto que supere a su presupuesto inicial"
                };
            }
            actualizarSaldo(gasto);
            return {
                success: true,
                message: "Gasto agregado correctamente"
            };
        } else {
            if (valores.saldo === "" || valores.saldo < gasto) {
                alert("Saldo insuficiente");
                return {
                    success: false,
                    message: "No puede agregar un gasto si no tiene presupuesto"
                };
            }
            actualizarSaldo(gasto);
            return {
                success: true,
                message: "Gasto agregado correctamente"
            };
        };
    };

    const Presupuesto = (presupuesto) => {
        if (valores.presupuesto === "" || valores.presupuesto === undefined || valores.presupuesto === null) {
            valores.presupuesto = presupuesto;
            $("#valorUno").text(valores.presupuesto);
        } else {
            valores.presupuesto = parseInt(valores.presupuesto) + parseInt(presupuesto);
            $("#valorUno").text(valores.presupuesto);
        }
    }
    const actualizarTabla = () => {
        if (gastos.length === 0) {
            $("#tabla-valor").html("");
            return;
        }
        let html = "";
        gastos.forEach((gasto, index) => {
            html += `
        <tr>
            <td>${gasto.nombre}</td>
            <td id="valorGasto">${gasto.valor}</td>
            <td><button type="button" class="button-eliminar" data-index="${index}">Eliminar</button></td>
        </tr>
        `;
        });
        $("#tabla-gasto").html(html);

        $(".button-eliminar").click(function () {
            const index = $(this).data("index");
            let valor = gastos[index].valor;
            gastos.splice(index, 0);
            actualizarTabla();
            actualizarSaldo(null, valor)
        });
    };

    const actualizarSaldo = (gasto = null, aumento = null) => {
        if (gasto != null) {
            if (valores.gastos === "" || valores.gastos === undefined || valores.gastos === null) {
                valores.gastos = gasto;
                $("#valorDos").text(valores.gastos);
                valores.saldo = parseInt(valores.presupuesto) - parseInt(valores.gastos);
                $("#valorTres").text(valores.saldo);
            } else {
                valores.gastos = parseInt(valores.gastos) + parseInt(gasto);
                $("#valorDos").text(valores.gastos);
                valores.saldo = parseInt(valores.presupuesto) - parseInt(valores.gastos);
                $("#valorTres").text(valores.saldo);
            };
        } else if (aumento != null) {
            valores.gastos = parseInt(valores.gastos) - parseInt(aumento);
            $("#valorDos").text(valores.gastos);
            valores.saldo = parseInt(valores.saldo) + parseInt(aumento);
            $("#valorTres").text(valores.saldo);
        }
    }

});






















// const clients = [];
// var myIndex;


// function addObjeto() {
//     const objetoGastos = {
//         nombreObjeto: document.getElementById("valorCuatro").value,
//         valorObjeto: document.getElementById("valorCinco").value
//     }
//     clients.push(objetoGastos)

// }




// function mostrarPresupuesto() {

//     const presupuesto = document.getElementById("dato-presupuesto").value;

//     const respuesta = document.getElementById("valorUno");
//     respuesta.textContent = `${presupuesto}`




//     //valor de saldo 
//     const saldo = document.getElementById("dato-presupuesto").value;

//     let respuesta2 = document.getElementById("valorTres");
//     respuesta2.textContent = `${saldo}`




// }


// function mostrarGastos() {
//     let datogasto = document.getElementById("datogasto").value;
//     let gastogasto = document.getElementById("gasto-gasto").value;



//     const respuestaUno = document.getElementById("valorCuatro");
//     respuestaUno.textContent = `${datogasto}`

//     const respuestaDos = document.getElementById("valorCinco");
//     respuestaDos.textContent = `${gastogasto}`


//     const datos = document.getElementById("gasto-gasto").value;
//     console.log(datos)

//     const respuesta1 = document.getElementById("valorDos");
//     respuesta1.textContent = `${datos}`


// }


// objetoGastos.push();
// document.getElementById("valorCuatro").innerHTML = objetoGastos.length;


// objetoValor.push()
// document.getElementById("valorCinco").innerHTML = objetoGastos.length;