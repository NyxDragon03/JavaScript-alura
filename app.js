//variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
while(numeroUsuario!=numeroSecreto){
    numeroUsuario = prompt("Adivina el número secreto entre 1 y 10:");
    
    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //conjunción de linea string y variable con funcionalidad de comillas invertidas (llaves con más usos, no solo variables)
        alert(`Acertaste, el número secreto es ${numeroSecreto}. Lo adivinaste en ${intentos} intento/s`);
    }else{
        if(numeroUsuario<numeroSecreto){
            alert(`Intenta de nuevo, el número secreto es mayor que ${numeroUsuario}`);
        }else{
            alert(`Intenta de nuevo, el número secreto es menor que ${numeroUsuario}`);
        }
        intentos = intentos+1 //incrementar el contador cuando no se acierta
    }
}