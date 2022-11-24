console.log(`
            Ficha técnica!!
            `)

const readlineSync = require('readline-sync')
const userName = readlineSync.question('Qual seu nome ?') 
const age = readlineSync.question('Qual sua idade ?')
const country = readlineSync.question(`Qual país você mora ?`)
const city = readlineSync.question('Qual sua cidade ?')


console.log(`
            Dados

            nome: ${userName}
            idade: ${age} anos
            país: ${country}
            bairro: ${city}
            `)

