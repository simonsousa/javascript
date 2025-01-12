function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if ( hora >= 0 && hora < 12) {
        // BOM DIA!!
        img.src = 'imagens/manhã-250.png'
        document.body.style.background = '#ebe866';
    } else if ( hora >= 12 && hora <= 18 ) {
        // BOA TARDE!!
        img.src = 'imagens/tarde-250.png'
        document.body.style.background = '#5ee4dd';
    } else {
        // BOA NOITE!!
        img.src = 'imagens/noite-250.png'
        document.body.style.background = '#32335e';
    } 
}