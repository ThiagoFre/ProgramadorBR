var vetor = new Array();
console.log(vetor)

var alunos = new Array("Igor", "José", "Marcos", "Mariana");
console.log(alunos[0])

// -x-

var alunos2 = ["Igor", "José", "Marcos", "Mariana", "Joana"]
console.log(alunos2.lenght)

// -x-

for(var i = 0; i < alunos.length; i++){
    console.log("for I:",alunos[i])
};

for (var i in alunos){
    console.log("for II:", alunos[i])
};

for (var aluno of alunos){
    console.log("for III:", aluno)
};