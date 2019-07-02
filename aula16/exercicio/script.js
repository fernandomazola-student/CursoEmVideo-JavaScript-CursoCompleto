var res = document.querySelector('#analise');
var numero = document.querySelector('input#numero');
var btnadicionar = document.querySelector('#btn-adicionar');
var lista = document.querySelector('select#selectbox');
var btnfinalizar = document.querySelector('#btn-finalizar');
var valoresLista = [];




function isNumero(numeroCampo) {
    //VERIFICANDO O NÚMERO DIGITADO, SE FOR MAIOR QUE 1 E MENOR QUE 100 É TRUE
    if (Number(numeroCampo) >= 1 && Number(numeroCampo) <= 100) {
        return true;
    } else {
        return false;
    }
}

function isLista(numeroCampo, valoresLista) {
    if (valoresLista.indexOf(numeroCampo) == -1) {
        return true;
    } else {
        return false;
    }
}


function adicionar() {
    if (isNumero(numero.value) && inLista(numero.value, valoresLista)) {
        valoresLista.push(numero.value);
        createElement
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
}