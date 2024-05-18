document.getElementById('register-form-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Colete os dados do formulário
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validação básica (você pode adicionar mais validações conforme necessário)
    if (password !== confirmPassword) {
        alert('As senhas não coincidem');
        return;
    }

    // Dados a serem enviados para o servidor
    const data = {
        email: email,
        username: username,
        password: password
    };

    // Envie os dados usando fetch API
    fetch('http://localhost:3000/register', { // Substitua pela URL do seu endpoint local
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Processar a resposta do servidor
        if (data.success) {
            alert('Registro bem-sucedido');
            window.location.href = 'main.html'; // Redireciona em caso de sucesso
        } else {
            alert('Registro falhou: ' + data.message);
        }
    })
    .catch(error => console.error('Erro:', error));
});
