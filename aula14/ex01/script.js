var txtinicio = document.querySelector('#txtinicio');
var txtfim = document.querySelector('#txtfim');
var txtpasso = document.querySelector('#txtpasso');
var btn = document.querySelector('#btn');
var divcontandop = document.querySelector('#p');


btn.onclick = function() {
    if (txtinicio.value.length == 0 || txtfim.value.length == 0) {
        divcontandop.innerHTML = 'Impossivel Contar'
    } else {
        var inicio = Number(txtinicio.value);
        var fim = Number(txtfim.value);
        var passo = Number(txtpasso.value);
        if (passo <= 0) {
            alert('Não é possivel contar com passo 0, vamos considerar o passo de 1 em 1');
            passo = 1;
        }
        divcontandop.innerHTML = 'Contando: </br>'
        if (inicio < fim) {
            for (inicio; inicio <= fim; inicio += passo) {
                divcontandop.innerHTML += `${inicio} \u{1F449} `;
            }
        } else {
            for (fim; fim <= inicio; fim += passo) {
                divcontandop.innerHTML += `${fim} \u{1F449} `;
            }
        }
        divcontandop.innerHTML += `\u{1F64F} `;
    }
}