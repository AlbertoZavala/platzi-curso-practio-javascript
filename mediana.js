const lista1 = [
 100,
 40000,   
 200,
 500, 
].sort(function(a, b){
    debugger;
    console.log(a)
    console.log(b)
    debugger;
    var yy = a - b;
    debugger;
    console.log(yy)
    debugger;
    return a - b;
});

const mitadLista1 = parseInt(lista1.length / 2);

let mediana;

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero){
    if(numero % 2 === 0){
        return true
    }else{
        return false;
    }
};

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1];    
    const elemento2 = lista1[mitadLista1 - 1];
    
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    
    mediana = promedioElemento1y2;
}else{    
    mediana = lista1[mitadLista1]    
}