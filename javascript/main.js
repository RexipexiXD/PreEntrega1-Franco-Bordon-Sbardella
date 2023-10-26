let carritodecompras;


let credito = Number (prompt("Ingrese su cantidad de credito:"));

let resultado = 0

for (let indice = 1; indice < 10; indice ++){
    let num1 = Number (prompt("Ingrese el precio del producto " + indice + ":"));
    resultado = num1 + resultado
}

if (resultado <= credito) {
    console.log("Subtotal: " + resultado)
    console.log("Impuestos: 0%")
    console.log ("Salgo positivo: " + (credito - resultado))
} else {
    console.log("No se puede realizar el pago")
    console.log ("Salgo negativo: " + (credito - resultado))
}
