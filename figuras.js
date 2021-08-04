// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

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

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 +  ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo =  (baseTriangulo * alturaTriangulo)/ 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculo");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
const pi = Math.PI;
console.log("PI: " + pi);

// Circunferencia.
const perimetroCirculo = diametroCirculo * pi;
console.log("La circunferencia del círculo es: " + perimetroCirculo + "cm^2");

// Área
const areaCirculo = pi * (radioCirculo * radioCirculo)
console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

// Calcular la altura de un triángulo isósceles.
// 1. Debe recibir como parámetros la longitud de los 3 lados del trángulo
// 2. La función debe validar que la longitud de los 3 lados del trángulo corresponden a un trángulo isósceles.
// 3. La función debe retornar la altura del triángulo.


function calcularAlturaTrianguloIsosceles(lado1, lado2, base){

    if(lado1 != lado2){
        console.log("Los lados laterales deben ser de la misma medida");
    }

    var mediaBase = (base / 2);
    var alturaTriangulIsosceles = (lado1 * lado1)- (mediaBase * mediaBase);
    console.log(alturaTriangulIsosceles)
}



