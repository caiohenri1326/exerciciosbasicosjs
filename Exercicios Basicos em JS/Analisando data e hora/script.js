function analise(){
    const tudo = new Date();

    const diaAtual = tudo.getDate();

    const mesAtual = tudo.getMonth();

    const anoAtual = tudo.getFullYear();

    const DiaSemanaAtual = tudo.getDay();
    
    const horas = tudo.getHours();

    const min = tudo.getMinutes();
    
    const sec = tudo.getSeconds();

    let res = document.getElementById('res');

    res.innerHTML = `<p>Dia: ${diaAtual}</p><br>`
    
    res.innerHTML += `<p>Mes: ${mesAtual}</p><br>`

    res.innerHTML += `<p>Ano: ${anoAtual}</p><br>`

    res.innerHTML += `<p>Dia da Semana: ${DiaSemanaAtual}</p><br>`
    
    res.innerHTML += `<p>Horas: ${horas}</p><br>`

    res.innerHTML += `<p>Minutos: ${min}</p><br>`

    res.innerHTML += `<p>Segundos: ${sec}</p><br>`
}