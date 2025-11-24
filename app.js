/*
  Rama: feature/login
  Fecha:24/11/25
  Descripción: Aquí irá el código de la funcionalidad del login.
*/
//------------------------------------------------------------
// 🔐 LOGIN MODULE
//------------------------------------------------------------
(function() {
    console.log("Login module loaded");

    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;

            if (user === "" || pass === "") {
                loginMessage.textContent = "Por favor completa todos los campos.";
            } else {
                loginMessage.textContent = "Inicio de sesión exitoso.";
            }
        });
    }
})();
