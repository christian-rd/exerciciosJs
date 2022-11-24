const readlineSync = require('readline-sync')

const valorEmReais = Number(readlineSync.question('Informe o valor em Real R$: ')) 
const cotacaoDolar = 5.24
const valorEmDolar = valorEmReais / cotacaoDolar
console.log(`Seu dinheiro em Dólar é: $${valorEmDolar.toFixed(2)}`)