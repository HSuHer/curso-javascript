// Codigo del cuadrado
console.group("Cuadrados");
const perimeroCuadrado= (lado) => lado * 4;
const areaCuadrado = (lado) => Math.pow(lado,2);
console.groupEnd();

// Codigo del triángulo
console.group("Triángulos");
const perimetroTriangulo= (lado1,lado2,base) => lado1+lado2+base;
const areaTriangulo =(base,altura) => (base*altura)/2;
console.groupEnd();

// Codigo del círculo
console.group("Círculos");
const diametroCirculo = (radio) => radio*2;
const PI=Math.PI;
const perimetroCirculo=(radio) => {
    const diametro=diametroCirculo(radio);
    return diametro*PI;
};
const areaCirculo =(radio) => Math.pow(radio,2)*PI;
console.groupEnd();


var calcularPerimetroCuadrado =  ()=>{
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro=perimeroCuadrado(value);
    alert(perimetro);
};

var calcularAreaCuadrado =  ()=>{
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const area=areaCuadrado(value);
    alert(area);
};