const readlineSync = require('readline-sync')

const nome = readlineSync.question('Informa seu nome: ')
const anoNascimento = Number(readlineSync.question('Informa seu ano de nascimento [yyyy]: ')) 
const ano = new Date()
const anoAtual = ano.getFullYear()
const idade = anoAtual - anoNascimento 

if (anoNascimento > anoAtual) {
    console.error('[erro] verifique os valores informados')
} else {
    console.log(`${nome}, sua idade é: ${idade} anos!`)
}



