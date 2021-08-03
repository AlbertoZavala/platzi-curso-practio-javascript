// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimietroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimietroCuadrado + "cm")

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrada + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
);

console.groupEnd();