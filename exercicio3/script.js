let a = Boolean(5 > 20 & 5 < 2)
let b = Boolean(5 === 5 || 5 === "5")
let c = Boolean(! 20 > 50)
let d = Boolean(! 20 > 50 || 50 > 60)

console.log("5 é maior que 20 e também é menor que 2?", a)
console.log("5 é igual a 5 ou é igual a “5”?", b)
console.log("negação de (vinte é maior que cinquenta)", c)
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", d)
