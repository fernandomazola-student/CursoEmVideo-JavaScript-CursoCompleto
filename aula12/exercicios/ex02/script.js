var btn = document.querySelector('input#btnverificar');
var anonascimento = document.querySelector('input#anonascimento');
var masc = document.querySelector('input#masculino');
var femin = document.querySelector('input#feminino');
var divp = document.querySelector('p#detect');
divimg = document.querySelector('div#imagem');
imgselect = document.querySelector('div#imagem img');
var date = new Date();
var ano = date.getFullYear();


btn.onclick = function() {
    if (anonascimento.value.length == 0 || Number(anonascimento.value) > ano) {
        alert('Verifique os dados e tente novamente');
    } else {
        var idade = ano - anonascimento.value;
        if (idade > 0 && idade <= 3) {
            if (masc.checked) {
                divp.innerHTML = `Detectamos um bebê com ${idade} anos masculino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/bebem.png');
                divimg.appendChild(img);
            } else {
                divp.innerHTML = `Detectamos um bebê com ${idade} anos feminino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/bebef.png');
                divimg.appendChild(img);

            }
        } else if (idade >= 4 && idade <= 11) {
            if (masc.checked) {
                divp.innerHTML = `Detectamos uma criança com ${idade} anos masculino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/criancam.png');
                divimg.appendChild(img);
            } else {
                divp.innerHTML = `Detectamos uma criança com ${idade} anos feminino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/criancaf.png');
                divimg.appendChild(img);
            }
        } else if (idade > 11 && idade <= 17) {
            if (masc.checked) {
                divp.innerHTML = `Detectamos um adolescente com ${idade} anos masculino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/adolescentem.png');
                divimg.appendChild(img);
            } else {
                divp.innerHTML = `Detectamos uma adolescente com ${idade} anos feminino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/adolescentef.png');
                divimg.appendChild(img);

                //ou
                // imgselect.src = './img/adolescentef.png';
            }
        } else if (idade >= 18 && idade <= 29) {
            if (masc.checked) {
                divp.innerHTML = `Detectamos um jovem com ${idade} anos masculino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/jovemm.png');
                divimg.appendChild(img);
            } else {
                divp.innerHTML = `Detectamos uma jovem com ${idade} anos feminino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/jovemf.png');
                divimg.appendChild(img);

                //ou
                // imgselect.src = './img/jovemf.png';
            }
        } else if (idade >= 30 && idade <= 59) {
            if (masc.checked) {
                divp.innerHTML = `Detectamos um homem com ${idade} anos masculino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/homemm.png');
                divimg.appendChild(img);
            } else {
                divp.innerHTML = `Detectamos uma mulher com ${idade} anos feminino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/mulherf.png');
                divimg.appendChild(img);

                //ou
                // imgselect.src = './img/jovemf.png';
            }
        } else if (idade >= 60) {
            if (masc.checked) {
                divp.innerHTML = `Detectamos um sr com ${idade} anos masculino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/idosom.png');
                divimg.appendChild(img);
            } else {
                divp.innerHTML = `Detectamos uma sra com ${idade} anos feminino`;
                var img = document.createElement('img');
                img.setAttribute('src', './img/idosaf.png');
                divimg.appendChild(img);

                //ou
                // imgselect.src = './img/jovemf.png';
            }
        }
    }
}