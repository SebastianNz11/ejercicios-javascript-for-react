// 10) Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo".

const eliminarEspacio = (cadena) => {
  const recorte = cadena.split(" ");
  const union = recorte.join("");
  return union;
};
console.log(eliminarEspacio("Hola mundo soy javascript"));
