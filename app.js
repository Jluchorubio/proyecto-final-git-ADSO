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

