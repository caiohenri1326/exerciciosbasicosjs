function calcular(){
    const idade = Number(window.prompt("Digite o ano em que nasceu :"));
    
    const anosAtuais = new Date();

    const ano = anosAtuais.getFullYear();

    const resultado = (ano - idade);

    const res = document.getElementById('res');

    res.innerHTML = `Quem Nasceu em ${idade} vai completar ${resultado} anos em ${ano}`;

}