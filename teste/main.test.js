function adicionar (a,b){
    return a+b
}

function calcularDobro(valor){
    return valor * 2
}

describe("Teste de integração: Soma e Dobro", () => {
    it("Deve somar dois números corretamente", () => {
        const resultadoSoma = adicionar(2, 3)
        const resultadoDobro = calcularDobro(resultadoSoma)
        
        expect(resultadoDobro).toBe(10)
    })
    it("Deve somar dois números corretamente", () => {
    const resultadoSoma = adicionar(-2,
    -3
    )
    const resultadoDobro = calcularDobro(resultadoSoma)
    expect(resultadoDobro).toBe(-10) 
    })
})

function concatenarTexto(parte1, parte2) {
    return parte1 + parte2
}   

function converterParaMaiscula(texto) {
    return texto.toUpperCase()
}
describe("Teste de integração", () => {
    it("deve concatenar dois textos e deixar maiusculo", () => {
        const textoConcaterano = concatenarTexto("Olá, ", "mundo!")

        expect(tudoMaiusculo).toBe("OLÁ, MUNDO!")
    
    })
})
