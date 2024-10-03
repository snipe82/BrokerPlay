function login() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        // Simulamos un inicio de sesión exitoso
        document.querySelector('.login-form').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }, 2000); // Simulando un tiempo de carga
}
