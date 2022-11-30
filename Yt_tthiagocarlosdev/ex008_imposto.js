const readlineSync = require('readline-sync')

console.log(' ')
console.log(' Calcule o imposto sobre a mercadoria ')
console.log(' ')

const mercadoria = Number(readlineSync.question('Informe o valor da mercadoria: '))
const imposto = 0.25
console.clear()

console.log(' ')
console.log(`Você pagará R$ ${mercadoria * imposto} reais de imposto`)
console.log(' ')