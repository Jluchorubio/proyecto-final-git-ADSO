/*
  Rama: feature/dashboard
  Fecha:24/11/25
  Descripción: Aquí irá el código de la funcionalidad del dashboard.
*/
//------------------------------------------------------------
// 📊 DASHBOARD MODULE
//------------------------------------------------------------
(function() {
    console.log("Dashboard module loaded");

    const dashboardBtn = document.getElementById("showInfoBtn");
    const dashboardInfo = document.getElementById("dashboardInfo");

    if (dashboardBtn) {
        dashboardBtn.addEventListener("click", () => {
            dashboardInfo.textContent = "Datos actualizados del dashboard: Usuarios: 102, Ventas: 45.";
        });
    }
})();

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
