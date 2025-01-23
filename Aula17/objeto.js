//em JavaScript, o Array é um objeto, e o objeto é um objeto
let amigo = {nome: "José", 
    sexo: "M", 
    peso: 85.4, 
    engordar(p=0){
        console.log("Engordou")
        this.peso += p
    }}

amigo.engordar(2)    
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)