console.log('Sistema da média das universidades')


var calcularMedia = require('./módulo/dados.js')
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout




})


entradaDados.question('Digite o nome do aluno: \n', function(nome) {
    let nomeAluno = nome;


    entradaDados.question('Digite o nome do professor: \n', function(nomeprofessor) {
        let nomeprofessor = nomeprofessor


        entradaDados.question('Digite o sexo do professor: \n', function(sexodoprofessor) {
            let sexodoprofessor = sexodoprofessor


            entradaDados.question('Digite o sexo do aluno: \n', function(sexodoaluno) {
                let sexodoaluno = sexodoaluno

                entradaDados.question('Digite o seu curso \n', function(nomedocurso) {
                    let nomedocurso = nomedocurso



                    entradaDados.question('Digite a disciplina \n', function(nomedadisciplina) {
                        let nomedadisciplina = nomedadisciplina


                        entradaDados.question('Digite a nota1: \n', function(nota1) {
                            let primeiraNota = nota1


                            entradaDados.question('Digite a nota2: \n', function(nota2) {
                                let segundaNota = nota2


                                entradaDados.question('Digite a nota3: \n', function(nota3) {
                                    let terceiraNota = nota3


                                    entradaDados.question('Digite a nota4: \n', function(nota4) {
                                        let terceiraNota = nota4

                                        let resultado = funcoes.calcularMedia(nota1, nota2, nota3, nota4)
                                        let string = funcoes.erroEscrita(nomeAluno, sexodoaluno, nomeprofessor, sexodoprofessor, nomedocurso, nomedadisciplina)

                                    })


                                })

                            })






                        })





                    })






                })




            })





        })






    })
})