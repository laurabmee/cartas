//executar uma vez quando for chamada
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    //== comparando valor
    if(!campoPesquisa){
    //finalizando a função
     section.innerHTML =  `<p class="mensagem-nao-encontrada">Digite o ano da carta que deseja encontrar</p>`
     return
    }

    //pegar os elemntos da classe do html
    console.log(campoPesquisa);

    let resultados = ""
    
    //para cada dado dentro da lista de dados
    for (let dado of data) {
        //se titulo includes campoPesquisa
        if(dado.titulo.toString().includes
        // Convertendo dado.titulo para string antes de usar includes()
        (campoPesquisa)) {
        // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2> 
                   <p class="descricao-meta">${dado.descricao}</p>
                   <a href= ${dado.link} target="_blank">Mais infos</a> 
            </div>

        `;
    }

    if (!resultados) {
      resultados = `<p class="mensagem-nao-encontrada">Nada foi encontrado</p>`
    }

    section.innerHTML = resultados
    // deixando a estrutura do section menos crítica, repetir menos
   }
}