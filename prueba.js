/* 
let nombre="HENRY";
let apellido="SUAREZ";
let nickname="HenrySuHer";
let edad=25;
let email="henry220797@gmail.com";
let mayorEdad=true;
let dineroAhorrado=4000;
let deudas=16000;

console.log(`Mi nombre es ${nombre} ${apellido}`);
let dineroReal=dineroAhorrado-deudas;
console.log(`El dinero real que tengo es ${dineroReal}`);
 */

/* const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."); */


function saludarEstudiante(name,lastname,nickname){
    let completeName=name + " " + lastname;
    return `Mi nombre es ${completeName} pero prefiero que me digas ${nickname}`;
}

let saludar=saludarEstudiante("Henry", "Suarez", "HenrySuHer");
console.log(saludar);

let saludarFuncion= function (name,lastname,nickname){
    let completeName=name + " " + lastname;
    return `Mi nombre es ${completeName} pero prefiero que me digas ${nickname}`;
}

console.log(saludarFuncion("Henry", "Suarez", "HenrySuHer"));

let saludarFlecha = (name,lastname,nickname) => {
    let completeName=name + " " + lastname;
    return `Mi nombre es ${completeName} pero prefiero que me digas ${nickname}`;
}

console.log(saludarFlecha("Henry", "Suarez", "HenrySuHer"));

const tipoDeSuscripcion = "ExpertPlus";
 
if(tipoDeSuscripcion==="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion==="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion==="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion==="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Tu suscripcion no es valida");
}

if(tipoDeSuscripcion==="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion==="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion==="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(tipoDeSuscripcion==="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

let suscripciones= [
    {descripcion:"Solo puedes tomar los cursos gratis",tipo:"Free"},
    {descripcion:"Puedes tomar casi todos los cursos de Platzi durante un mes",tipo:"Basic"},
    {descripcion:"Puedes tomar casi todos los cursos de Platzi durante un año",tipo:"Expert"},
    {descripcion:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",tipo:"ExpertPlus"},
];

let suscripcion = suscripciones.find(suscripcion => suscripcion.tipo==="Basic");
console.log(suscripcion.descripcion);


let i=0;
while(i<5){
    console.log("El valor de i es: " + i);
    i++;
}

i=10;
while (i>=2) {
    console.log("El valor de i es: " + i);
    i--;
}


let esCorrecto =false;
do {
    let respuesta=prompt("Cuanto es 2 + 2?");
    if(respuesta==4){
        esCorrecto=true;
        alert("Feliciadades respuesta correcta");
    }
}while (!esCorrecto)




let mostrarElemento= (arreglo,index) => arreglo[index];


let elemento = mostrarElemento(suscripciones,0);
console.log(elemento);

let mostrarElementos= (arreglo)=> {
    arreglo.forEach(elemento => {
        console.log(`La suscripcion tipo ${elemento.tipo} permite ${elemento.descripcion}`);
    });
};

mostrarElementos(suscripciones);

let persona = {
    nombre: 'Henry',
    apellido: 'Suarez',
    edad: 25
  }
  const unaFuncion = (objeto) => {
    Object.values(objeto).forEach(elem => {
      console.log(elem);
    });
  };
  
  unaFuncion(persona);