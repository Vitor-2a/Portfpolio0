const button = document.getElementById('btn-gerar');
let painel = document.getElementById('painel-resposta');
const nome = document.getElementById('input-nome');

button.addEventListener('click', () => {
    gerarResposta();
});

function gerarResposta() {
    const nomeValue = nome.value.trim();
    if (nomeValue === '') {
        painel.textContent = 'Por favor, insira um nome.';
        return;
    }

    const resposta = `Olá, ${nomeValue}! Bem-vindo(a) ao nosso site.`;
    painel.textContent = resposta;
}