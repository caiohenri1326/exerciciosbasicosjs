function contar(){
    let num1 = Number(window.prompt('Digite o primeiro valor:'));
    let num2 = Number(window.prompt('Digite o segundo valor:'));
    let res = document.getElementById('res')
    
    if (num1 > num2){
        res.innerHTML = `<p>Analisando os valores ${num1} e ${num2}, o maior valor e ${num1}</p>`;
    }
    else if(num1 < num2){
        res.innerHTML = `<p>Analizando os valores ${num1} e ${num2}, o maior valor e ${num2}</p>`;
    }
    else{
        res.innerHTML = `<p>Analisando os valores ${num1} e ${num2}, os dois valores sao iguais!`;
    }
}   