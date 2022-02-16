const calcularMediaArimetica = (lista) => {
    //let sumaLista=0;
    /*for(let elemento of lista){
        sumaLista+=elemento;
    }*/
    const sumaLista = lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    let promedio=sumaLista/lista.length;
    return promedio;
}
