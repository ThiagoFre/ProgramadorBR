// && e
// || ou
// Negativo

// var exemploUm = false;
// var exemploDois = true;

// var resultado = exemploUm && exemploDois;
// console.log(resultado)

var idadeDoPasse = 9;

var menino = idadeDoPasse <= 10;
var senhor = idadeDoPasse >= 80;

var passeLivre = menino || senhor;

console.log("Com essa idade direito a passe livre: ", idadeDoPasse)
console.log("menino: ", menino);
console.log("senhor: ", senhor);
console.log("Tem direito ao passe?", passeLivre);
