import React, { useState } from 'react';

function Login() {
    // Estado para os campos de entrada (usuário e senha) e mensagem de erro
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de envio do formulário

        // Exemplo de validação simples
        if (username === 'admin' && password === 'password123') {
            alert('Login bem-sucedido!');
        } else {
            setError('Credenciais inválidas. Tente novamente!');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="username">Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Digite seu usuário"
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                <button type="submit" style={{ padding: '10px 20px', width: '100%' }}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;