// let num = [ 5 , 8 , 9 , 2 , 3 , 10 , 12 ]

// num.push(1)

// num.sort()

// console.log(num)

// console.log(`O vetor tem ${num.length} posições`)

// console.log(`O primeiro valor do vetor é ${num[0]}`)

// let pos = num.indexOf(8)

// if (pos == -1) {
//     console.log('O valor não foi encontrado')
// } else {
//     console.log(`O valor está na posição ${pos}`)
// }
//-----------Colocando um Array em ordem utilizando apenas uma chamada de função------------------------//

let vetor = [ 9 , 4 , 8 , 7 , 6 ]

let ordenarVetor = (valor) => {
    valor.sort()
    return valor
}

console.log(ordenarVetor(vetor))