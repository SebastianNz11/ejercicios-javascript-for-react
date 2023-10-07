// 14) Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH".

const invertir = (cadena) => {
  const frase = cadena.split("").reverse();
  return frase.join("");
};
console.log(invertir("Hola Mundo"));
