const CalcularMedia = function(nota1, nota2, nota3, nota4) {


    let nota1 = parseFloat(nota1);
    let nota2 = parseFloat(nota2);
    let nota3 = parseFloat(nota3);
    let nota4 = parseFloat(nota4);

    let resultado;

    resultado = (nota1 + nota2 + nota3 + nota4) / 2
    console.log(resultado)
}


if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
    console.log('ERRO: É necessário digitar algum valor na entrada.');


} else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
    console.log('ERRO: É necessário digitar que todos os dados digitados sejam números');


} else if (primeiraNota > 100 || segundaNota > 100 || terceiraNota > 100 || quartaNota > 100) {
    console.log('Digite um valor menor que 100')
} else {
    resultado = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))
}
if (resultado >= 50) {
    console.log('Aluno Aprovado')
} else {
    ('aluno reprovado')
}

function resultado() {
    module.exports = {
        resultado

    }
}