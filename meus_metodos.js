const array1 = [1, 4, 9, 16,20,42,56];
 //Meu método Map
 
 function myMap (predicate){
    const novoArray = [];
    for(let x = 0; x < this.length; x++){
        const item = this[x];
        novoArray.push(predicate(item, x, this));
    }
    return novoArray;
}

Array.prototype.myMap = myMap;
const resultadoMap = array1.myMap((item) => item * 2);

console.log(`Resultado do meu método myMap, onde os valores serão multiplacados por dois:   ${resultadoMap}`);
console.log(`Resultado em JSON: ${JSON.stringify(resultadoMap, null, 2)} \n\n`);


/*------------------------------------------------------*/
//Meu método Filter
function myFilter(predicate){
    const novoArray2 = [];
    for(let x = 0; x < this.length; x++){
       const item = this[x];
        if(predicate(item, x, this)){
            novoArray2.push(item)
        }
    }
    return novoArray2;
}

Array.prototype.myFilter = myFilter;
const resultadoFilter = array1.myFilter((item) => item >= 10);
console.log(`Resultado do meu método myFilter, onde os valores serão retornados atendendo a condição de serem maiores ou igual a dez:   ${resultadoFilter}`);
console.log(`Resultado em JSON: ${JSON.stringify(resultadoFilter, null, 2)} \n\n`);

/*------------------------------------------------------*/

//Meu método myReduce
function myReduce (callback, valorInicial) {
    if(this.length === 0 && valorInicial === undefined){
        throw new TypeError("Sem valor inicial")
    }
    let acumulador = valorInicial !== undefined ? valorInicial : this[0];
    let valorAtual = valorInicial !== undefined ? 0 : 1;

    for(let x = valorAtual; x < this.length; x++) {
        acumulador = callback(acumulador, this[x], x, this);
    }
    return acumulador;
}

Array.prototype.myReduce = myReduce;
const soma = array1.myReduce((acc, val) => acc + val, 0)
console.log(`Resultado do meu método myReduce, onde os valores somados serão retornados:  ${soma}`);

//Adicionado uma nova validação de teste
const palavras = ["Dev", "Class", "2024"];
const descricao = palavras.myReduce((acc, palavras) => acc + " " + palavras);
console.log(descricao);
