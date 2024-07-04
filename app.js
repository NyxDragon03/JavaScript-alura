//variables            //funcionalidad
                 // dlDecimal #aleatrio(0-1)  rango quita0- añade el limite
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
// let palabra = 'intento';
let maxIntentos = 4;

while(numeroUsuario!=numeroSecreto){
    numeroUsuario = parseInt(prompt("Adivina el número secreto entre 1 y 10:"));
    
    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //conjunción de linea string y variable con funcionalidad de comillas invertidas (template string)
                                                  //variable                                                  //codigo js
        alert(`Acertaste, el número secreto es ${numeroSecreto}. Lo adivinaste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    }else{
        if(numeroUsuario<numeroSecreto){
            alert(`Intenta de nuevo, el número secreto es mayor que ${numeroUsuario}`);
        }else{
            alert(`Intenta de nuevo, el número secreto es menor que ${numeroUsuario}`);
        }
        //incrementar el contador cuando no se acierta
        // intentos = intentos+1;         <-
        //intentos +=1;                   <- diferentes formas de realizar un contador
        intentos++                      //<-
        // palabra = 'intentos';
        if(intentos>4){ //romper el ciclo para que el usuario no se quede en este todo el tiempo
            alert(`Llegaste al número máximo de intentos (${maxIntentos})`);
            break;
        }
    }
}