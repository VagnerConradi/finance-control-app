document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');

  // Simulação de usuários registrados
  let registeredUsers = [
    { username: 'user1', email: 'user1@example.com', password: 'password1' },
    { username: 'user2', email: 'user2@example.com', password: 'password2' }
  ];

  loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  });

  registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  });

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameOrEmail = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Verifica se o usuário existe na lista de usuários registrados
    const user = registeredUsers.find(user =>
      (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password
    );

    if (user) {
      console.log('Usuário logado:', user.username);
      localStorage.setItem('isLoggedIn', true); // Armazena o estado de login
      window.location.href = 'src/pages/dashboard.html'; // Redireciona para o dashboard
    } else {
      alert('Usuário ou senha inválidos.');
    }
  });

  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Verifica se o usuário já está registrado
    const existingUser = registeredUsers.find(user =>
      user.username === username || user.email === email
    );

    if (existingUser) {
      alert('Usuário ou e-mail já registrados.');
      return;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    // Adiciona o novo usuário à lista de usuários registrados (simulação)
    registeredUsers.push({ username, email, password });
    console.log('Usuário registrado:', username);
    alert('Registro bem-sucedido! Faça login para continuar.');
    // Aqui você pode redirecionar para a página de login ou fazer outra ação após o registro
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  });

  // Verifica se o usuário está logado ao carregar a página do dashboard
  if (window.location.pathname.endsWith('dashboard.html') && !localStorage.getItem('isLoggedIn')) {
    window.location.href = '../../public/index.html';
  }
});

// Função para deslogar e redirecionar para a página de login
function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = '../../public/index.html';
}
