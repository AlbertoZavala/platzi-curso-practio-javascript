function calcularPrecioConDescuento(precio, descuento){
    console.log(precio)
    console.log(descuento)

    const porcentajePrecioConDescuento =  100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    console.log(precioConDescuento);
    return precioConDescuento;
}


function calcularPrecio(){
    var precio = document.getElementById("InputPrecio").value;
    var descuento = document.getElementById("InputDescuento").value;

    var resultado = calcularPrecioConDescuento(precio, descuento);

    var elementoResultado = document.getElementById("precioResultado");
    elementoResultado.innerText = "$" + resultado;

}