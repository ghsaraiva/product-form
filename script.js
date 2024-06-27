const localStorageName = 'Desafio';
const erroP = document.getElementById('erro');
const nomeListagem = document.getElementById('nome-listagem');
const valorListagem = document.getElementById('valor-listagem');

let enviar = () => {
    if (validaNome() && validaDescricao() && validaValor() == true) {
        window.location.href = 'listagem.html'
    }
};

let voltarCadastro = () => {
    window.location.href = 'index.html'
};

let validaNome = () => {
    let nomeProduto = document.getElementById('nome-produto').value;
    if (!nomeProduto) {
        erroP.innerText = 'Digite o nome do produto!';
    } else {
        let nomeProdutoLocal = JSON.parse(localStorage.getItem(localStorageName) || '[]');
        nomeProdutoLocal.push({
            nome: nomeProduto
        });
        localStorage.setItem(localStorageName, JSON.stringify(nomeProdutoLocal));
        return true;
    }
};

let validaDescricao = () => {
    let descricaoProduto = document.getElementById('descricao-produto').value;
    if (!descricaoProduto) {
        erroP.innerText = 'Digite a descrição do produto!';
    } else {
        let descricaoProdutoLocal = JSON.parse(localStorage.getItem(localStorageName) || '[]');
        descricaoProdutoLocal.push({
            descricao: descricaoProduto
        });
        localStorage.setItem(localStorageName, JSON.stringify(descricaoProdutoLocal));
        return true;
    }
};

let validaValor = () => {
    let valorProduto = document.getElementById('valor-produto').value;
    if (!valorProduto) {
        erroP.innerText = 'Digite o valor do produto!';
    } else {
        let valorProdutoLocal = JSON.parse(localStorage.getItem(localStorageName) || '[]');
        valorProdutoLocal.push({
            valor: valorProduto
        });
        localStorage.setItem(localStorageName, JSON.stringify(valorProdutoLocal));
        return true;
    }
};

let exibirItens = () => {
    let nomeProdutoLocal = JSON.parse(localStorage.getItem(localStorageName) || '[]');
    let valorProdutoLocal = JSON.parse(localStorage.getItem(localStorageName) || '[]');
    nomeListagem.innerHTML = '';
    valorListagem.innerHTML = '';
    nomeProdutoLocal.forEach(item => {
        let liNome = document.createElement('li');
        liNome.textContent = item.nome;
        nomeListagem.appendChild(liNome);
    });
    valorProdutoLocal.forEach(item => {
        let liValor = document.createElement('li');
        liValor.textContent = item.valor;
        valorListagem.appendChild(liValor);
    });
};

exibirItens();

