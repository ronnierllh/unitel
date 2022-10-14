
/*var num1 = prompt('Digite o primeiro numero');
var num2 = prompt('Digite o segundo numero');
var num3 = prompt('Digite o terceiro numero');
var result = num1 * num2 * num3;
var resto = 5 % 2;
console.log('A multiplicação de '+num1+', '+num2+' e '+num3+' é: '+result);
console.log('O resto da divisão de 5 por 2 é: '+resto);*/

//document.getElementById('parrag').innerHTML = 'Seja bemvindo';

var num1 = prompt('Digite a primeira nota');
var num2 = prompt('Digite a segunda nota');
var num3 = prompt('Digite a terceira nota');
var media;

function calcularMedia(nota1, nota2, nota3){
    media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

    if (media > 9) {
        document.write('Aprobado ', media);
    } else {
        document.write('Reprobado ', media);
    }

    return media;
}

console.log(calcularMedia(num1, num2, num3));