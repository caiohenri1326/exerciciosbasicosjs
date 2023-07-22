function tentar(){
    let usuario = Number(window.prompt("Qual e seu palpite?"));

    let min = 1;

    let max = 100;

    let pc = 0;

    let dif = max - min;

    let aleatorio = Math.random();

    pc = min + Math.trunc(dif * aleatorio);

    let res = document.getElementById('res')

    if (usuario > pc){
        res.innerHTML += (`Voce falou ${usuario}. Meu Numero e Menor!<br>`);

    }
    else if(usuario < pc){
        res.innerHTML += (`<p>Voce Falou ${usuario}. Meu Numero e Maior!<br>`)
    }
    else{
        res.innerHTML += (`<p><b>Parabens</b> Voce Acertou! Eu tinha sorteado o valor ${pc}!`);
    }
}
