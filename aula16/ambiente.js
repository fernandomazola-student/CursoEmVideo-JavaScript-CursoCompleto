function parImpar(n) {
    if (n % 2 == 0) {
        return `O número ${n} é par`;
    } else {
        return `O número ${n} é impar`;
    }
}


console.log(parImpar(11));

//o zero é para considerar o 0 caso nao envie os parametros para a function
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}

console.log(soma(2, 4));


let v = function(x) {
    return x * 2;
}

console.log(v(2));


//5! = 5 x 4 x 3 x 2 x 1

function fatorial(n) {
    let fat = 1;
    for (let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}

console.log(fatorial(5));

//Recursivvidade

function fatorialn(n) {
    if (n == 1) {
        return
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorialn(5));