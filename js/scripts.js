function calcularMedia(){
    var nota1, nota2, media;
    
    nota1 = document.getElementById('nota1').value;
    nota2 = document.getElementById('nota2').value;
    
    media = (Number(nota1) + Number(nota2)) / 2;

    document.getElementById('media').innerHTML = media;

    if (media >= 7) {
        document.getElementById('msg').innerHTML = 'Parabens, conseguiste acessar ao exame.'
    } else {
        document.getElementById('msg').innerHTML = 'Desafortunadamente não conseguiste acessar ao exame.'        
    }
}