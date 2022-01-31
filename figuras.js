// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimeroCuadrado= ladoCuadrado*4;
console.log(`El perímetro del cuadrado es: ${perimeroCuadrado}cm`);

const areaCuadrada = Math.pow(ladoCuadrado,2);
console.log(`El área del cuadrado es: ${areaCuadrada}cm^2`);
console.groupEnd();

// Codigo del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
const alturaTriangulo = 5.5;
console.log(`La altura del triánguilo es: ${alturaTriangulo}cm`);
const perimetroTriangulo= ladoTriangulo1+ ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);
console.groupEnd();

// Codigo del círculo
console.group("Círculos");
const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);
const diametroCirculo = 2* radioCirculo;
console.log(`El diametro del círculo es: ${diametroCirculo}cm`);
const PI=Math.PI;
console.log(`PI es: ${PI}`);
const perimetroCirculo= diametroCirculo*PI;
console.log(`La circuferencia del círculo es: ${perimetroCirculo}cm`);
const areaCirculo = Math.pow(radioCirculo,2)*PI;
console.log(`El área del círculo es: ${areaCirculo}cm^2`);

console.groupEnd();