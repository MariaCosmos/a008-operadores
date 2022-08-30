let numero1 = Number(prompt("insira um numero"))
let numero2 = Number(prompt("insira outro numero"))

console.log("1° numero:", numero1)
console.log("2° numero:", numero2)

let maior = numero1 > numero2
let igual = numero1 === numero2
let resto1 = numero1 % numero2
let resto2 = numero2 % numero1
let divisivel1 = resto1 === 0
let divisivel2 = resto2 === 0

console.log("o primeiro numero é maior que o segundo?", maior)
console.log("o primeiro numero é iguel o segundo?", igual)
console.log("o primeiro numero é divisivel pelo segundo?", divisivel1)
console.log("o segundo numero é divisivel pelo segundo?", divisivel2)