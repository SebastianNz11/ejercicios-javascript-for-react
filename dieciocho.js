// 18) programa que devuelva el número de cifras de un número entero. Ejemplo: 1234 = 4 cifras.

const conteo = (numero) => {
  const cadena = numero.toString();
  const arreglo = cadena.split("").length;
  return `El número de cifras es: ${arreglo}`;
};
console.log(conteo(1000));
