function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2)/ 2;
    //console.log("Sua media é: " + media);

    return media;
}

var MediaAluno = media(6, 7);

var m = media;
var MediaAluno2 = m(2, 3);
 
console.log(MediaAluno);
console.log(MediaAluno2);

var resultado = media(8, 9);
var resultado2 = media(5, 10);
console.log("Suas notas: " + resultado + " & " + resultado2);

// -x-

function Ola(){
    return "Olá Mundo!"
};

var saudacao = Ola();
console.log(saudacao);

// -x-
//função anônima
var mediaModelo2 = function(number1, number2){
    return(number1+number2)/ 2;
};

var m = media(5, 6);
console.log(m);

//função anônima II(Arrow função)
// var mediaModelo2 = (number1, number2) => {
//     return(number1+number2)/ 2;
// };

// var m = media(5, 6);
// console.log(m);