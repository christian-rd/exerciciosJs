const readlineSync = require('readline-sync')

const val1 = Number(readlineSync.question('Informe o primeiro valor: '))
const val2 = Number(readlineSync.question('Informe o segundo valor: '))
const val3 = Number(readlineSync.question('Informe o terceiro valor: '))
const resultado = val1 + val2 + val3
console.log(`A soma dos lados equivale á: ${resultado}`)

if (val1 == val2 && val2 == val1) {
    console.log('Triangulo equilatero')
} else if (val1 !== val2 && val2 !== val3) {
    console.log('Triangulo escaleno')
} 