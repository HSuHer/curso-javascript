const lista=[1,2,3,1,2,3,4,2,2,2,1];

const listaCount={};

lista.map((elemento)=>{
    if(listaCount[elemento]){
        listaCount[elemento] +=1 ;
    }else{
        listaCount[elemento]=1;
    }
    
});

const listaArray = Object.entries(listaCount).sort((elementoA, elementoB)=>elementoA[1]-elementoB[1]);
const modaObject=listaArray[listaArray.length-1];
const moda=modaObject[1];