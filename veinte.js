// 20) Programa que realice el juego de piedra, papel o tijera. Ejemplo: "Piedra" > "Tijera", "Tijera" > "Papel", "Papel" > "Piedra".

const juego = (opcion1, opcion2) => {
  const op1 = opcion1.toLowerCase();
  const op2 = opcion2.toLowerCase();
  if (
    (op1 === "piedra" && op2 === "tijera") ||
    (op1 === "tijera" && op2 === "piedra")
  ) {
    return "Gana piedra";
  } else if (
    (op1 === "tijera" && op2 === "papel") ||
    (op1 === "papel" && op2 === "tijera")
  ) {
    return "Gana tijera";
  } else if (
    (op1 === "papel" && op2 === "piedra") ||
    (op1 === "piedra" && op2 === "papel")
  ) {
    return "Gana papel";
  } else {
    return " Una palabra no es valida";
  }
};
console.log(juego("piedra", "papel"));
