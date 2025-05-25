document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mensagem-confirmacao').textContent = 'Mensagem enviada com sucesso!';
    this.reset();
});