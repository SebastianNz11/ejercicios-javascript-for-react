// 16) Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejemplo: edades(10, 20, 30, 40, 50) = "La edad mayor es 50 y la edad menor es 10".

const edades = (arreglo) => {
  const menorMayor = arreglo.sort((a, b) => a - b);
  const menor = menorMayor[0];
  const mayor = menorMayor[menorMayor.length - 1];
  return `La menor edad es ${menor} y la mayor es ${mayor}`;
};
console.log(edades([50, 35, 60, 20, 70]));
