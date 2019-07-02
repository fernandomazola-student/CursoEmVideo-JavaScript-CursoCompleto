let num = [5, 8, 2, 9, 3];

//Colocar o 6 no indice 3
num[3] = 6

//Colocar na ultima posicao
num.push(7);

console.log(`Nosso vetor é ${num}`);
console.log(`Esse é o nosso primeiro valor ${num[0]}`);
console.log(`O tamanho do nosso vetor é ${num.length}`);
console.log(`Essa é a ordem crescente ${num.sort()}`);


for (var c = 0; c < num.length; c++) {
    console.log(num[c]);
}
console.log('--------------');
for (let pos in num) {
    console.log(num[pos]);
}
console.log('--------------');

//buscar o valor dentro de um array, mas ele te passa a posicao
let posicao = num.indexOf(10);
console.log(posicao);

console.log('--------------');

//Verificando se achou o valor no vetor
if (posicao == -1) {
    console.log(`O valor não foi encontrado`);
} else {
    console.log(`O valor está na posição ${posicao}`);
}