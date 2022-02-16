
const calcularMediaArimetica = (lista) => {
    const sumaLista = lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    let promedio=sumaLista/lista.length;
    return promedio;
}

const esPar = (numero)=>{
    if(numero%2===0){
        return true;
    }else{
        return false;
    }
}


const calcularMediana = (lista) => {
    lista.sort((a, b)=>a-b);
    const mitadLista=parseInt(lista.length/2);
    let mediana;
    
    if(esPar(lista.length)){
        const elemento1=lista[mitadLista-1];
        const elemento2=lista[mitadLista];
        mediana=calcularMediaArimetica([elemento1,elemento2]);
        
    }else{
        mediana=lista[mitadLista];
    }

    return mediana;
}