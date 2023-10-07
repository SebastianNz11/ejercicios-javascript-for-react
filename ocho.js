// 8) Programa que devuelva el número de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales.

const conteoVocales = (cadena) => {
  const minusculas = cadena.toLowerCase();
  const arreglo = minusculas.split("");
  const vocales = arreglo.filter(
    (vocal) =>
      vocal === "a" ||
      vocal === "e" ||
      vocal === "i" ||
      vocal === "o" ||
      vocal === "u"
  ).length;
  return vocales;
};

console.log(conteoVocales("Hola esto es una frase"));
