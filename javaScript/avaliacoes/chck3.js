    function estudantes(nome, faltas, notas) {
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
  
    this.incrementoFalta = function () {
      let faltasTotal = 0;
      faltasTotal = this.faltas + 1;
      return faltasTotal;
    };
  }
  
  const alunoA = new estudantes("Leo", 12, [9, 6, 2, 10]);
  const alunoB = new estudantes("Bruno", 5, [5, 7, 9, 8]);
  const alunoC = new estudantes("Kayke", 10, [9, 10, 9.5, 8.5]);
  const alunoD = new estudantes("Negão", 0, [5, 7, 8, 8]);
  const alunoE = new estudantes("Branquelo", 1, [10, 10, 10, 10]);
  
  console.log(alunoA.calcularMedia());
  console.log(alunoA.incrementoFalta());
  console.log(alunoC.calcularMedia());
  console.log(alunoC.incrementoFalta());

  console.log(" -x-");

  var alunos = [alunoA, alunoB, alunoC, alunoD, alunoE];
  let curso = {
    nomeCurso: "Googu",
    notaAprovacao: 8,
    faltasMax: 5,
    estudantes: alunos,
  
    criarAluno: function (nome, faltas, notas) {
      alunos.push(new estudantes(nome, faltas, notas));
      console.log("Aluno Adicionado");
  
      return this.criarAluno;
    },
  
  alunoAprovacao: function(aluno){
    if(aluno.calcularMedia() >= this.notaAprovacao && aluno.faltas< this.faltasMax) {
          return true
      } 
      if (aluno.faltas === this.faltasMax && (aluno.calcularMedia() > this.notaAprovacao + this.notaAprovacao * 0.1) ){
          return true
      }
      else {
          return false
      }
  },
    resultadoBoleanAluno: function () {
      var resultado = [];
      for (let i = 0; i < this.estudantes.length; i++) {
        var aluno = this.estudantes[i].nome;
        resultado.push(aluno);
        resultado.push(this.alunoAprovacao(this.estudantes[i]));
      }
      return resultado
    },
  };  
  console.log(curso.resultadoBoleanAluno());