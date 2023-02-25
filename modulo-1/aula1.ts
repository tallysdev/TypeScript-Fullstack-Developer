import { validateHeaderName } from "http"

const soma = (a: number,b: number) => {
    console.log( a + b )
}

soma(12,12)

// declarando variaveis

var a = 'a'
let b = 'b'
const c = 'c'

// tipos primitivos

let q: number = 1
let w: string = 'tallts'
let t: number | string | boolean = true
t = 3
let v: any = false

// objetos

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const tallys: Pessoa = {
    nome: 'tallys',
    idade: 19
}

const aureliano: Pessoa = {
    nome: 'aureliano',
    idade: 20,
    profissao: 'dev'
}

// Arrys

const arrayPessoas: Array<Pessoa> = [
    tallys,
    aureliano
]

const arrayNumber: number[] = [
    1,3,4,5
]

const arrayString: Array<string> = [
    '2','3','4'
]


// estruturas de desisão
const num: number = 13

if (num > 15) {
    console.log("este numero é maior que 15")
} else if (num == 15) {
    console.log("Este numero é igual a 15")
} else {
    console.log("este numero é menor que 15")
}

const typeUser = {
    admim: "Seja bem vindo adm",
    student: "Olá estudante",
    viewer: "Olá visitante"
}

function ValidateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario: string = 'admim'

ValidateUser(usuario)
ValidateUser("student")
ValidateUser('viewer')

