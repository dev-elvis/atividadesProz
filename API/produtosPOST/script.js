const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')


// Funções

function gerarProduto(evento){
    evento.preventDefault()

    const jsonBody = JSON.stringify({
        produto: nomeProduto.value,
        valor: valorProduto.value,
        descrição: descricaoProduto.value
    })


    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonBody
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const postProduto = document.createElement('div')
        postProduto.innerHTML = `
            <p>${data.json.produto}</p>
            <p>${data.json.valor}</p>
            <p>${data.json.descrição}</p>
        `
        produtosCadastrados.appendChild(postProduto)

        // Limpar o formulário
        nomeProduto.value = ''
        valorProduto.value = ''
        descricaoProduto.value = ''
        alert('Produto cadastrado com sucesso!')
    })
    .catch()
}


// Eventos

btnEnviar.addEventListener('click', (evento) => gerarProduto(evento))