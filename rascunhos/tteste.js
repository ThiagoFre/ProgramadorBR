

function infoAulunos(nome, faltas, notas){
    var estudantes = {
        nome: nome,
        faltas: faltas,
        notas: notas,

        calculeMedia: function(){
            return(this.notas + this.notas)/ 2;
        },
        Incrementofaltas: function(){
            return(faltas =+ 1)
            }
 }
 return estudantes;
}

const x = new estudantes ('Thiago', 12, [9, 2 ])

console.log(infoAulunos())
console.log()
