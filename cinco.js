//5) Calcular la edad de una persona, pe. miFuncion(new Date(1988,09,01)) devolverá 34 años.

const anio = "";
const mes = "";
const dia = "";

const edad = (anio, mes, dia) => {
  const fecha = new Date(`${anio}, ${mes}, ${dia}`).getFullYear();
  const fechaHoy = new Date();
  const año = fechaHoy.getFullYear();
  const edad = año - fecha;
  return `Su edad es: ${edad} años`;
};

console.log(edad(1996, 2, 11));
