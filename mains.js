const inputNome = document.getElementById('input-nome');
const inputTelefone = document.getElementById('input-telefone');
const nomes = [];
const telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    
})

function adicionaLinha() {
    const corpoTabela = document.getElementById('corpo-tabela');

    if(nomes.includes(inputNome.value) || (telefones.includes(inputTelefone.value))) {
        alert("Nome ou telefone já está cadastrado")

    }else {
        const linha = document.createElement('tr');

        const nome = document.createElement('td');
        nome.innerHTML = inputNome.value;
        nomes.push(inputNome.value)
        linha.appendChild(nome);

        const telefone = document.createElement('td');
        telefone.innerHTML = inputTelefone.value;
        telefones.push(inputTelefone.value)
        linha.appendChild(telefone);

        corpoTabela.appendChild(linha);
    }
    
}

