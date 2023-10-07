// 9) Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.

const palindroma = (palabra) => {
  const minusculas = palabra.toLowerCase();
  const arreglo = minusculas.split("");
  const arregloReversa = arreglo.slice().reverse();
  const string1 = arreglo.join("");
  const string2 = arregloReversa.join("");
  return string1 === string2 ? true : false;
};
console.log(palindroma("Ana"));
