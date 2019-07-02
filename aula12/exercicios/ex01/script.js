function carregar() {
    var msg = document.querySelector('#msg');
    var img = document.querySelector('#imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;



    if (hora > 5 && hora < 13) {
        img.src = './img/manha.png';
        document.body.style.background = '#ffddad';
    } else if (hora >= 13 && hora < 19) {
        img.src = './img/tarde.png';
        document.body.style.background = '#b15b28';
    } else if (hora >= 19 && hora < 23) {
        img.src = './img/noite.png';
        document.body.style.background = '#1f2243';
    }
}