function calcular(){
    let fnum = Number(window.prompt("Primeiro Valor:"));

    let tnum = Number(window.prompt("Segundo valor:"));

    let operador = Number(window.prompt(`Valores informados: ${fnum} e ${tnum}.\nO Que vamos Fazer?\n[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir`))

    let somar = (fnum + tnum);

    let sub = (fnum - tnum);

    let multi = (fnum * tnum);

    let div = (fnum / tnum);

    const res = document.getElementById('res');

    if(operador == 1){
        res.innerHTML = (`Calculando...<br><br>`)
        res.innerHTML += (`${fnum} + ${tnum} = ${somar}`);
    }
    else if(operador == 2){
        res.innerHTML = (`Calculando...<br><br>`)
        res.innerHTML += (`${fnum} - ${tnum} = ${sub}`);
    }
    else if (operador == 3){
        res.innerHTML = (`Calculando...<br><br>`)
        res.innerHTML += (`${fnum} X ${tnum} = ${multi}`);
    }
    else if(operador == 4){
        res.innerHTML = (`Calculando...<br><br>`)
        res.innerHTML += (`${fnum} / ${tnum} = ${div}`);
    }
    else{
        window.prompt("Valor Invalido! Verifique os dados!")
    } 
}