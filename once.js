// 11) Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas. Ejemplo: "Yoni Escobar". Resultado: "YE".

const mayusculas = (cadena) => {
  const frase = cadena.split(" ");
  const arreglo = frase
    .map((valor) => {
      return valor[0].toUpperCase();
    })
    .join("");
  return arreglo;
};

console.log(mayusculas("walter sebastián"));
