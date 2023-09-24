const sum = function(a,b){
    return console.log(a,b)
}
//sum('batata','frita')

const arrowSum = (a,b) => a+b

//console.log(arrowSum('batata','frita'))


//Aprendendo filter

const numeros = [0,34,20,67,10,23,99,44,22,32,1,8,6]
const numerosFiltrados = numeros.filter(num =>{
    if(num>30)
    return num
})

const usuarios = [{nome:'Humberto',disponivel:true},
{nome:'Joyce',disponivel:false},
{nome:'Lourdes',disponivel:true},
{nome:'Severo',disponivel:true},
{nome:'Helena',disponivel:false},
{nome:'Anderson',disponivel:true}]

const usuariosTrue = usuarios.filter(function(value){
    if(value.disponivel){
        return value.nome
    }
})
//console.log(usuariosTrue)

//vendo map

const nomePequeno = usuarios.map(valor =>{
    if(valor.nome.length>5){
        valor.nomeGrande = true
        return valor
    }
})
//destructuring

const frutas = ["Maçã","Banana","Laranja"]
const [f1,f2,f3] = frutas

const produto ={name:'Helicóptero', price: 192000, color:'Green'}

const {name,price,color} = produto



//Spread operator
const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = [...a1, ...a2]
//classes

class Pessoa {
    constructor(name,price){
        this.name = name
        this.price = price

    }
}
const pessoa1 = new Pessoa('Humberto','Lima')
console.log(pessoa1)

