  function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
   
    this.calcularMedia = function () {
      let soma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        soma = soma + this.notas[i];
      }
      
      return soma / this.notas.length;
    };
  
    faltasTotal = 0;
    this.adicionarfalta = function () {
      faltasTotal = this.faltas + 1;
      return faltasTotal;
    };
  }
  
const alunoA = new Aluno("Jeff", 5, [9, 10, 9, 10]);
const alunoB = new Aluno("Thiago", 1, [5, 7, 9, 8]);


console.log("Jeff: " + alunoA.calcularMedia());
console.log("Faltas do Jeff: " + alunoA.adicionarfalta());

let curso = {
    nome: "",
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaDeEstudantes:[],

    criarAluno: function aluno(nome, faltasMax, notas) {
        aluno.push(new aluno(nome, faltasMax, notas, listaDeEstudantes))
        return criarAluno;
},
    notaAprovacao: function(aluno){
        let aprovado = "";
        let faltas = "";

        if(aprovado >= this.notaAprovacao && faltas < this.faltasMaximas) {
            return true
        }
        if (aluno.faltas === this.faltasMax && (aluno.calcularMedia() > this.notaAprovacao + this.notaAprovacao * 0.1) ){
          
            return true
        }
        else {
         
            return false
        }
        
    }
};

const aluno1 = new Aluno("Lucas", 5, [9, 6, 9, 10]);
console.log(aluno1);
console.log(curso.notaAprovacao(alunoA))