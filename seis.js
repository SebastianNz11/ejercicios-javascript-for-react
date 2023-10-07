// Programa que convierte decimal a romano hasta el número 1000.  mifuncion(15)  devolver:  el 15 es XV

const decimalARomano = (numero) => {
  if (typeof numero !== "number" || numero < 1 || numero > 1000) {
    return "El número debe ser un entero entre 1 y 1000.";
  }

  const unidadesRomanas = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  const decenasRomanas = [
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
  ];
  const centenasRomanas = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
  ];
  const milesRomanos = ["", "M", "MM", "MMM"];

  const unidad = unidadesRomanas[numero % 10];
  const decena = decenasRomanas[Math.floor((numero % 100) / 10)];
  const centena = centenasRomanas[Math.floor((numero % 1000) / 100)];
  const mil = milesRomanos[Math.floor(numero / 1000)];

  return mil + centena + decena + unidad;
};

const numero = 15;
const numeroRomano = decimalARomano(numero);
console.log("El " + numero + " es " + numeroRomano);
