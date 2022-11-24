const operacaoAritmetica = () => {
    console.log(`
        Somando valores            
    `)

    const readlineSync = require('readline-sync')
    const val1 = Number(readlineSync.question('Digite outro valor: ')) 
    const val2 = Number(readlineSync.question('Digite outro valor: ')) 

    const resultado = val1 + val2
    
    if (!Number(resultado)) {
        console.log('[error] verifique os valores informados')
    } else {
        console.log(`O resultado é: ${Number(resultado)}`) 
    }
    
}

operacaoAritmetica()
