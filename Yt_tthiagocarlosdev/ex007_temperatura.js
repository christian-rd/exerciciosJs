const readlineSync = require('readline-sync')

console.log(' ')
console.log(' Transforme graus °F em graus °C ')
console.log(' ')

const grausF = Number(readlineSync.question('Informe a temperatura em graus °F: '))
const grausC = ( grausF - 32) * 5/9

console.clear()
console.log(`Temperatura: ${grausC.toFixed(2)} °C`)