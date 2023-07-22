function gerar(){
    function gerarnumero(min,max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const gerador = gerarnumero(1,100);

    const res = document.getElementById('res');

    res.innerHTML += `Acabei de pensar no numero ${gerador}!<br>`
}
function limpar(){
    let res = document.getElementById('res');
    res.innerHTML = null;
}