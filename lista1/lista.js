let nome = prompt("Qual e o seu nome??")
console.log("Seja bem vindo", nome)

//----------//

const input = document.getElementById("input")
const botao = document.getElementById("botao")
const mensagem = document.getElementById("mensagem")

botao.addEventListener ("click", () => {
    mensagem.innerText = ("eae ") + input.value
})

//----------//

const numero1 = Number(prompt("Escreva o primeiro numero"))
const numero2 = Number(prompt("Escreva o segundo numero"))
const soma = numero1 + numero2
document.getElementById("resultado").textContent = "A soma é: " + soma

//----------//

const Concatenacao = prompt("2 - Concatenação: Digite um número:")
console.log("O número que você digitou foi: " + Concatenacao + " (Este é o número como texto)")

const idade = Number(prompt("3 - Maioridade: Digite sua idade:"))
if (idade >= 18) {
    alert("Você é maior de idade.")
} else {
    alert("Você é menor de idade.")
}

//----------//

const frase = prompt("Digite uma frase:")
const palavraParaSubstituir = prompt("Digite uma palavra da frase para substituir:")
const novaPalavra = prompt("Por qual palavra você quer substituir?")
const fraseModificada = frase.replace(palavraParaSubstituir, novaPalavra)
console.log("Frase modificada:", fraseModificada)

const palavraParaVerificar = prompt("Digite uma palavra para verificar se ela existe na frase:")
console.log("A palavra " + palavraParaVerificar + " existe na frase? " + frase.includes(palavraParaVerificar))

//----------//

const Aleatorio = Math.floor(Math.random() * 10) + 1
const palpite = Number(prompt("Tente adivinhar o número entre 1 e 10:"))
if (palpite === Aleatorio) {
    alert("Parabéns! Você acertou!")
} else {
    alert("Ops, você errou. O número era " + Aleatorio + ".")
}

//----------//

const numeroOperacoes = Number(prompt("Digite um número para ver as operações:"))
console.log("Valor absoluto:", Math.abs(numeroOperacoes))
console.log("Elevado à 4:", Math.pow(numeroOperacoes, 4))
console.log("Raiz quadrada:", Math.sqrt(numeroOperacoes))

//----------//

const diaAniversario = Number(prompt("Digite o dia do seu aniversário (ex: 25):"))
const mesAniversario = Number(prompt("Digite o mês do seu aniversário (1-12):"))

const dataAniversario = new Date()
dataAniversario.setMonth(mesAniversario - 1)
dataAniversario.setDate(diaAniversario)

const hojeAgora = new Date()
const diferencaMeses = dataAniversario.getTime() - hojeAgora.getTime()

if (diferencaMeses < 0) {
    dataAniversario.setFullYear(hojeAgora.getFullYear() + 1)
    const diferencaMesesProximoAno = dataAniversario.getTime() - hojeAgora.getTime()
    const diasRestantes = Math.ceil(diferencaMesesProximoAno / (1000 * 60 * 60 * 24))
    console.log("Faltam " + diasRestantes + " dias para o seu aniversário!")
} else {
    const diasRestantes = Math.ceil(diferencaMeses / (1000 * 60 * 60 * 24))
    if (diasRestantes === 0) {
        alert("Feliz aniversário!")
    } else {
        console.log("Faltam " + diasRestantes + " dias para o seu aniversário!")
    }
}