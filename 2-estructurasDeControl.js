// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    // Tu código aquí
    //Verificar Paridad
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par");
    } else {
        console.log("El número " + numero + " es impar");
    }
} //verificarParidad(18);

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    // Tu código aquí
    // Clasificar Edad
    if (edad > 18 && edad < 65) {
        console.log("Eres Adulto");
    } 
    else if (edad > 65) {
            console.log("Eres Adulto Mayor");
        } 
    else {
        console.log("Eres menor de edad");
    } 
} //clasificarEdad(40);

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    // Tu código aquí
    // Cuenta Regresiva
    while (numero > 0) {
        numero = numero - 1;
        console.log("Cuenta regresiva en: " + numero);
    }
} //cuentaRegresiva(10);

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    // Tu código aquí
    // Repetir mensaje
    let mensaje = "Estoy aprendiendo JavaScript";
    let i = 0;
    do {
        i = i + 1;
        console.log(mensaje);
    } while (i < 5);
} //repetirMensaje();

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    // Tu código aquí
    // Imprimier Pares
    for (let i = 0; i <= 20; i += 2) {
        console.log("El numero", i , "es par");
    }
} //imprimirPares();

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    // Tu código aquí
    // Detener en Seis
    for (let i = 1; i < 10; i++) {
        if (i === 6) {
            console.log("Fin del programa");
            break;
        }
        console.log("Número de recorrrido:", i);
    }
} //detenerEnSeis();

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    // Tu código aquí
    // Saltar Cinco
    for (let i = 1; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log("Recorrido Nro:", i);
    }
} //saltarCinco();

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    // Tu código aquí
    // Obtener Dia Semana
    /* let diaDeLaSemana = 5 */
    switch (dia) {
        case 1:
            console.log("Hoy es Lunes");
            break;
        case 2:
            console.log("Hoy es Martes");
            break;
        case 3:
            console.log("Hoy es Miércoles");
            break;
        case 4:
            console.log("Hoy es Jueves");
            break;
        case 5:
            console.log("Hoy es Viernes");
            break;
        case 6:
            console.log("Hoy es Sábado");
            break;
        case 7:
            console.log("Hoy es Domingo");
            break;
        default:
            console.log("Ese día no existe")
    }
} //obtenerDiaSemana(7);

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    // Tu código aquí
    // Es vocal
    // let letras = "a"
    switch (letra) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Es una vocal");
            return true;
        default:
            console.log("No es vocal");
            return false;
    }
} //esVocal("u");

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    // Tu código aquí
    // Evaluar Números
    /* let number1 = 7;
    let number2 = -50;
    let number3 = -5; */
    if ((a >= 0 && b >= 0) && c >= 0) {
        console.log("Todos son números positivos");
    } else if (a <= 0 && b <= 0 && c <= 0) {
        console.log("Todos son numeros negativos");
    } else {
        console.log("Al menos uno es negativo");
    }
} //evaluarNumeros(7, 8, 10);

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
