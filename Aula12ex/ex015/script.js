function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('input#txtano').value
    var res = document.querySelector('div#res')
    
    if (formAno.length === 0 || formAno > ano) {
        alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')// [0-M]  [1-F]
        var idade = ano - formAno
        var genero = ''

        var img = document.createElement('img')// é como se eu tivesse criando
        img.setAttribute('id','foto')// a tag img na parte HTML com id='foto'
        
        if ( fsex[0].checked ) {
            genero = 'Homem'
            if ( idade >= 0 && idade < 6 ) {
                //bebe
                img.setAttribute('src','imagens/bebe-m.png')
            } else if ( idade < 13 ) {
                //Criança
                img.setAttribute('src','imagens/criança-m.png')
            } else if ( idade < 21 ) {
                //jovem
                img.setAttribute('src','imagens/jovem-m.png')
            } else if ( idade < 50 ) {
                //Adulto
                img.setAttribute('src','imagens/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/velho-m.png')
            }
        } else if ( fsex[1].checked ) {
            genero = 'Mulher'
            if ( idade >= 0 && idade < 6 ) {
                //bebe
                img.setAttribute('src','imagens/bebe-f.png')
            } else if ( idade < 13 ) {
                //Criança
                img.setAttribute('src','imagens/criança-f.png')
            } else if ( idade < 21 ) {
                //jovem
                img.setAttribute('src','imagens/jovem-f.png')
            } else if ( idade < 50 ) {
                //Adulto
                img.setAttribute('src','imagens/adulta-f.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/velha-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    } 
}