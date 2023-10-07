// 19) programa que muestre los numeros primos de 1 a 1000.

const esPrimo = (numero) => {
  if (numero <= 1) {
    return false;
  }
  let divisor = 2;
  while (divisor <= Math.sqrt(numero)) {
    if (numero % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
};
console.log(esPrimo(5));
console.log(esPrimo(10));
console.log(esPrimo(13));
