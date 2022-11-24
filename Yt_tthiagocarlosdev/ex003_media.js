const readlineSync = require('readline-sync')

const val1 = Number(readlineSync.question('Informe um valor: '))
const val2 = Number(readlineSync.question('Informe outro valor: '))
const resultado = (val1 + val2) / 2

console.log(resultado)