var number = Math.random() * 100;
var numero = 5;

// Melhor entendimento com "vez"
//for = para
for(var vez = 0; vez < numero; vez++)
{ console.log("ForI: Executou pela " + vez +" vez") };

// Comum em códigos usando o "i, j, k"
for(var i = 0; i < numero; i++)
{ console.log("ForII: Executou pela " + i +" vez") };

console.log("Acabou a repetição")

// -x-

// while = enquanto
while(numero < 10)
{console.log("Númerodo while: " + numero); numero++; };

while(number < 90){
    console.log("whileII: " + number); 
    var number = Math.random() * 100;
    number++;
};

console.log(number);
console.log("Acabou a repetição")