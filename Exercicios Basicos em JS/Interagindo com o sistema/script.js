function interagir(){
    const dataEhorasatual = new Date();

    const data = dataEhorasatual.toLocaleDateString();

    const horasAtual = dataEhorasatual.toLocaleTimeString();

    let res = document.getElementById('res');

    res.innerHTML = `<p>O que eu recebi do sistema foi ${dataEhorasatual}`;
}