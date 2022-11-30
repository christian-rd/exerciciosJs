const readlineSync = require('readline-sync')

const valorEmprestado = Number(readlineSync.question('Informe o valor desejado para emprestimo: '))
const porcentagemEmprestimo = 0.20
const valorEmprestimo = 1 + porcentagemEmprestimo
const pagamentoEmprestimo = valorEmprestado * valorEmprestimo
const parcelas = Number(readlineSync.question('Informe o numero de parcelas desejadas: '))

console.clear()
console.log(`
Você pagará R$ ${pagamentoEmprestimo} reais, ${parcelas}x de R$ ${(pagamentoEmprestimo / parcelas).toFixed(2)} reais`)