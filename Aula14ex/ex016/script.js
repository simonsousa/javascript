function contar() {
    let inicio = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passos = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = 'impossível contar!'
        window.alert('[ERRO] faltam dados a serem preenchidos')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if( p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        //contagem crescente
        if( i < f ) {
        let c = i;
        do {
            
            res.innerHTML += `${c} \u{1F449}`
            c += p
        
        } while (c <= f)
        
            //contagem regressiva
            } else {
                let c = i;
                do {
                
                    res.innerHTML += `${c} \u{1F449}`
                    c -= p
            
                } while (c >= f)
            }
        res.innerHTML += `\u{1F3C1}`
    }
}
/*
    
    emojis em Js: ` \u{Codígo HexaDecimal, tirando o U+} `

*/