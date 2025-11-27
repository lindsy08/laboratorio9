let num1 = 0;
let num2 = 0;
let operacion = "";

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;

    } else if (operacion === "resta") {
        return num1 - num2;

    } else if (operacion === "multiplicacion") {
        return num1 * num2;

    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: no se puede dividir entre 0.";
        }
        return num1 / num2;

    } else {
        return "Error: operación no válida.";
    }
}

while (true) {
    // pedir operación
    operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o escriba 'salir' para terminar:");

    if (operacion === null) {
        console.log("Operación cancelada por el usuario.");
        break;
    }

    // salir
    if (operacion.toLowerCase() === "salir") {
        console.log("Gracias por usar la calculadora. ¡Hasta luego!");
        break;
    }

    // validación
    if (
        operacion !== "suma" &&
        operacion !== "resta" &&
        operacion !== "multiplicacion" &&
        operacion !== "division"
    ) {
        console.log("Error: operación no válida.");
        continue;
    }

    // pedir números
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: debe ingresar números válidos.");
        continue;
    }

    // ejecutar operación
    let resultado = realizarOperacion(num1, num2, operacion);

    // mostrar resultado
    console.log(`Resultado de la ${operacion}: ${resultado}`);
}

