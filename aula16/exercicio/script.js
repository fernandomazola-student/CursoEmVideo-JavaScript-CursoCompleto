let res = document.querySelector('#info');
let lista = document.querySelector('#selectbox');
let numero = document.querySelector('#numero');
let valoresLista = [];




function isNumero(numeroCampo) {
    //VERIFICANDO O NÚMERO DIGITADO, SE FOR MAIOR QUE 1 E MENOR QUE 100 É TRUE
    if (Number(numeroCampo) >= 1 && Number(numeroCampo) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(numeroCampo, valoresLista) {
    if (valoresLista.indexOf(Number(numeroCampo)) == -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(numero.value) && inLista(numero.value, valoresLista)) {
        valoresLista.push(Number(numero.value));
        var option = document.createElement('option');
        option.text = `Valor ${numero.value} foi adicionado`;
        lista.appendChild(option);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
    numero.value = '';
    numero.focus();
}

function finalizar(){
    if(valoresLista.length == 0){
        alert('Adicione um valor na lista');
    }else{
        let total = valoresLista.length;
        let maiornum = valoresLista[0];
        let menornum = valoresLista[0];
        let soma = 0;
        res.innerHTML += `<p>Ao todo temos ${total} cadastrados</p>`;
        for (let pos in valoresLista){
            if(valoresLista[pos] > maiornum){
                maiornum = valoresLista[pos];
            }
            if(valoresLista[pos] < menornum){
                menornum = valoresLista[pos];
            }
            soma += valoresLista[pos];
        }
        res.innerHTML += `<p>O maior número informado é ${maiornum}</p>`;
        res.innerHTML += `<p>O menor número informado é ${menornum}</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${soma / valoresLista.length}</p>`
    }
}
