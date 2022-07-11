function factorial(numero){
    let resultado = 1;
    let i = 1;
    
    while (i <= numero){
        resultado *= i;
        ++i;

        if(factorial === resultado){
            break;
        }

    }
    return resultado;
}
console.log(factorial(10));