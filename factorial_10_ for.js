function factorial(numero) {
    let total = 1;
    for (i = 1; i <= numero; i++) {
      total = total * i;
    }
    return total;
  }

console.log(factorial(10));

