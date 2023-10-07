// 15) Programa que pase un arreglo de números y devuelva la suma de todos los números. Ejemplo: suma(10, 20, 30, 40, 50) = "La suma de todos los números es 150".

const suma = (arreglo) => {
  const sumador = arreglo.reduce((acumulador, valor) => {
    return acumulador + valor;
  }, 0);
  return `La suma total es: ${sumador}`;
};
console.log(suma([1, 2, 3, 4]));
