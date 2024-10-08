"use strict";
function verificarNumeroTarjeta(tarjeta){
    // Variables
        // Array con el numero de la tarjeta
    let array_tarjerta = Array.from(tarjeta,Number);
        // Suma total de todos los numeros de la array
    let total = 0;
        // Variable auxiliar
    let aux = 0;
    // Duplicamos los numeros pares en el caso de que sean mayor de 9 y si es el otro caso sumamos los dos digitos que formar la multiplicacion
    for (let i = 0; i < array_tarjerta.length; i+=2) {
    
        aux = array_tarjerta[i] * 2;

        if (aux > 9){
            array_tarjerta[i] = 1 + (aux - 10);
        }else{
            array_tarjerta[i] = aux;
        }

    }
    // Sumamos todos los valores 
    for (let i = 0; i < array_tarjerta.length; i++) {
        total += array_tarjerta[i];
    }
    console.log(total)
    // Si el ultimo digito es 0 la tarjeta es valida
    if(total % 10 == 0){
        alert("La tarjeta es valida");
    }else{
        alert("La tarjeta es Falsa");
    }
    return 0
}   
//Num prueba: 4137894711755904

// Programa principal
let num = prompt("Inserte numero de tarjeta")

verificarNumeroTarjeta(num)