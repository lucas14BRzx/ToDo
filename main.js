// let paragrafo = document.createElement('p')
// let texto = document.createTextNode('Bom dia!')

// paragrafo.appendChild(texto)
// document.body.appendChild(paragrafo)

function adicionarTarefa() {
    let li = document.createElement("LI");
    let input = document.formPrincipal.tarefa.value;
    let input_texto = document.createTextNode(input);

    li.appendChild(input_texto);
    document.querySelector('ul').appendChild(li);
    document.formPrincipal.tarefa.value = "";

    criarBotaoFechar(li);

   
    li.addEventListener('click', function() {
        li.classList.toggle('checked');
    });
}

function criarBotaoFechar(li) {
    let rotulo = document.createElement('SPAN');
    let fechar = document.createTextNode('\u00D7');

    rotulo.className = "close";
    rotulo.appendChild(fechar);

    li.appendChild(rotulo);

    rotulo.onclick = () => {
        li.style.display = 'none';
    };
}


document.querySelectorAll('li').forEach(criarBotaoFechar);
