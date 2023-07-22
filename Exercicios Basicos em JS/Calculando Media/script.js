function calculo(){
    let nome = window.prompt("Digite seu Nome:")
    let nota1 = parseFloat(window.prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(window.prompt("Digite a Segunda Nota")); 
    let med = (nota1 + nota2);

    let msg
    if (med >= 6){
        msg = 'Meus Parabens'
    }
    else{
        msg = "Estude mais um pouco!"
    }
    let res = document.getElementById('resultado')
    res.innerHTML = `<p>Calculando a media final de <mark>${nome}</mark></p>`
    res.innerHTML += `<p>As Notas obtidas foram  ${nota1} e ${nota2}</p>`;
    res.innerHTML += `<p>A media Final sera ${med /2}</p>`;
    res.innerHTML += `<p>A mensagem que temos e: <strong style='color:red;'${msg}</strong></p>`;
}