// 17) programa de escala de notas de 0 a 10. Ejemplo: 0-5 = "Pésimo", 6-7 = "Regular", 8-9 = "Bueno", 10 = "Excelente".

const notas = (nota) => {
  if (nota >= 0 && nota <= 5) {
    return "Pesimo";
  } else if (nota > 5 && nota < 8) {
    return "Regular";
  } else if (nota > 7 && nota < 10) {
    return "Bueno";
  } else if (nota === 10) {
    return "Excelente";
  } else {
    return "Valor de nota no valida";
  }
};
console.log(notas(10));
