function tabuada () {
    let txtn = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (txtn.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let num = Number(txtn.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}` /* para saber qual item foi selecionado */ 
            tab.appendChild(item)
            c++
        }
    }

}