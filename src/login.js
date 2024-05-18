document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login bem-sucedido');
            window.location.href = 'src/main.html'; // Redireciona em caso de sucesso
        } else {
            alert('Usuário ou senha inválidos');
        }
    })
    .catch(error => console.error('Erro:', error));
});

document.getElementById('register-btn').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'src/registerPage.html'; // Redireciona para a página de registro
});
