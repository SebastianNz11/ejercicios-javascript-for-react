// 13) Programa que devuelva el texto con la primera letra de cada palabra en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo".

const mayusculas = (cadena) => {
  const frase = cadena.split(" ");
  const arreglo = frase
    .map((elemento) => {
      return elemento.charAt(0).toUpperCase() + elemento.slice(1);
    })
    .join(" ");
  return arreglo;
};

console.log(mayusculas("hola mundo"));
