//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let numerosLista = document.querySelectorAll(".numero")



let arreglo = [];

for (let i = 0; i < numerosLista.length; i++) {
    arreglo.push(Number(numerosLista[i].textContent))
}



let promedio = calcularPromedio(arreglo)
let numeroChico = numeroMasChico(arreglo)
let numeroGrande = numeroMasGrande(arreglo)
let numeroFrecuente = numeroMasFrecuente(arreglo)




function calcularPromedio(array) {
    let sumaTotal = 0
    
    for (let i = 0; i < array.length; i++) {
        sumaTotal += array[i]
    }
    let promedio = sumaTotal / array.length
    return promedio.toFixed(2)
}
function numeroMasChico(array) {
    let numeroChico = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] < numeroChico) {
            numeroChico = array[i]


        }
        return numeroChico
    }
}
function numeroMasGrande(array) {
    let numeroGrande = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > numeroGrande) {
            numeroGrande = array[i]

        }
    }
    return numeroGrande
}

function numeroMasFrecuente(array) {
    let numeroFrecuente = 0
    let arreglo = array.sort()

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i + 1] === arreglo[i]) {
            numeroFrecuente = array[i]
        }
    }
    return numeroFrecuente
}
const $botonCalcular = document.querySelector("#calcular")

$botonCalcular.onclick = function () {
    document.querySelector("#promedio").textContent = promedio
    document.querySelector("#numero_chico").textContent = numeroChico
    document.querySelector("#numero_grande").textContent = numeroGrande
    document.querySelector("#numero_frecuente").textContent = numeroFrecuente
}
