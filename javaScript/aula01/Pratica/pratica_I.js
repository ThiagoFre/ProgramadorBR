// Praticando tudo que aprendi aqui até agora, em JS 1 e 2!
// Nome do aluno, nota 1 e nota2, média e aprovado ou não.

// Nome dos Alunos
var nomes = ["Marcia", "Thiago", "Eduardo"];

// Nota 1 & Nota 2
var notasA = [8, 6.0, 8];
var notasB = [7.5, 10, 1];

// Média
function media(n1, n2){    
    return (n1 + n2)/ 2
};

// Aprovação
function resultado(media){
    if(media > 7){
        return "Aprovado";
    } else {
       return "Reprovado";
    }
};

for (var index in nomes ){
    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1, nota2);

    console.log(nomes[index]+ "  " + nota1 + "/" + nota2
    + " - média = "+ m + "  " + resultado(m));
};