// Criação de um objeto
var objeto = {  }
var exemploObjeto = new Object( { nome:"Thiago", sobrenome:"Freitas" } );
//exeploObejeto.nome = "Thiago";
//exeploObejeto.sobrenome = "Freitas"

// Criação de um objeto
var aluno = { nome:"Igor", nota:[7.5, 5.0] }
var aluno2 = { nome:"Thiago", nota:[8, 10] }
 
// Nova propriedade
aluno.matricula = 2423;
aluno["sobrenome"] = "Freitas";

// Nova propriedae II 
var novaPropiedade = "sobrenome";

console.log(aluno)
console.log(aluno2)
console.log(aluno.sobrenome);
console.log(aluno.matricula);
console.log(aluno.nome, aluno["nota"], aluno["nota"][1]);

// -x-

var _aluno = {
    nome: "Thiago",
    sobrenome: "Freitas",
    notas: [7.0, 8.5, 10, 5.5, 10],

    metodo: function(n1, n2, n3, n4, n5){
        return (n1 + n2 + n3+ n4+ n5)/ 5;
    }
}
console.log(_aluno.nome);
console.log("Thiago: " + _aluno.metodo(_aluno.notas[0], _aluno.notas[1],
    _aluno.notas[2], _aluno.notas[3],_aluno.notas[4]));



var _aluno2 = {
    nome: "Fernando",
    sobrenome: "Pereira",
    notas: [7.0, 8.5, 10, 5.5, 10],

    metodo: function(n1, n2, n3, n4, n5){
        return (this.notas[0] + this.notas[1] +
            this.notas[2] + this.notas[3] + this.notas[4])/ 5;
    }
};
console.log("Fernado: " + _aluno2.metodo());

// -x-

var calculeMedia = function(){
    return (this.nota1 + this.nota2)/ 2;
}

var turma = [{
    nome: "Lucas Henrique",
    nota1: 7,
    nota2: 9,

    media: calculeMedia
},
{
    nome: "Luiz Fernando",
    nota1: 6,
    nota2: 9,

    media: calculeMedia
}
]

var _aluno3 = turma[0];
var _aluno3 = turma[1];
// console.log(_aluno3);
console.log("Luiz Fernado: " + _aluno3.media());

// -x-

function construtora(nome, nt1, nt2){
    // Poderia ser apenas um "return"(economizaria mais linhas de código)
    // return {
    var estudante = {
        nome: nome,
        nota1: nt1,
        nota2: nt2,
    
        calcMedia: function(){
            return(this.nota1 + this.nota2)/ 2;
        }
    }
    // poderia ter apagado esse na lógica do comentário de cima!
    return estudante;
};

var turmaUm = [
    construtora("Reinaldo", 8, 7),
    construtora("Lucas", 3, 5),
    construtora("Thiago", 8, 7)
];

var criarAluno = turmaUm[1];

console.log(criarAluno);
console.log(criarAluno.calcMedia());

turmaUm.forEach( function(elemento){
    console.log(elemento);
});

for (var criarAluno of turmaUm){
    console.log(criarAluno.nome +  " - " + criarAluno.calcMedia())
}