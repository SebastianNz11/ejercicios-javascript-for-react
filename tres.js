// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const frase = "Hola que tal";
const stringArray = (frase) => {
  const arreglo = frase.split(" ");
  return arreglo;
};
console.log(stringArray(frase));
