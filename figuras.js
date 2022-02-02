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


const calcularPerimetroCuadrado =  ()=>{
    const input=document.getElementById("InputCuadrado");
    const value=Number(input.value);
    const perimetro=perimeroCuadrado(value);
    alert(perimetro);
};

const calcularAreaCuadrado =  ()=>{
    const input=document.getElementById("InputCuadrado");
    const value=Number(input.value);
    const area=areaCuadrado(value);
    alert(area);
};

const calcularPerimetroTriangulo =  ()=>{
    const inputA=document.getElementById("InputTrianguloA");
    const inputB=document.getElementById("InputTrianguloB");
    const inputBase=document.getElementById("InputTrianguloBase");
    const inputAltura=document.getElementById("InputTrianguloAltura");
    const ladoA=Number(inputA.value);
    const ladoB=Number(inputB.value);
    const base=Number(inputBase.value);
    const altura=Number(inputAltura.value);
    const perimetro=perimetroTriangulo(ladoA,ladoB,base);
    alert(perimetro);
};

const calcularAreaTriangulo =  ()=>{
    const inputA=document.getElementById("InputTrianguloA");
    const inputB=document.getElementById("InputTrianguloB");
    const inputBase=document.getElementById("InputTrianguloBase");
    const inputAltura=document.getElementById("InputTrianguloAltura");
    const ladoA=Number(inputA.value);
    const ladoB=Number(inputB.value);
    const base=Number(inputBase.value);
    let altura=0;
    if(ladoA===ladoB){
        altura=calcularAlturaIsosceles(ladoA,base);
    }else{
        altura=Number(inputAltura.value);
    }
    const area=areaTriangulo(base,altura);
    alert(area);
};

const calcularPerimetroCirculo =  ()=>{
    const input=document.getElementById("InputRadio");
    const value=Number(input.value);
    const perimetro=perimetroCirculo(value);
    alert(perimetro);
};

const calcularAreaCirculo =  ()=>{
    const input=document.getElementById("InputRadio");
    const value=Number(input.value);
    const area=areaCirculo(value);
    alert(area);
};

const calcularAlturaIsosceles = (ladoA,base)=> Math.sqrt(Math.pow(ladoA,2)-((Math.pow(base,2)/4)));