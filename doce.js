// 12) Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo" = 2 palabras.

const conteoPalabras = (cadena) => {
  const frase = cadena.split(" ");
  const arreglo = frase.length;
  return arreglo;
};
console.log(conteoPalabras("Hola soy una frase en Javascript"));
