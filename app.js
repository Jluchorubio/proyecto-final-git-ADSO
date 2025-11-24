/*
  Rama: feature/footer
  Fecha:24/11/25
  Descripción: Aquí irá el código de la funcionalidad del footer.
*/
//------------------------------------------------------------
// 📄 FOOTER MODULE
//------------------------------------------------------------
(function() {
    console.log("Footer module loaded");

    const yearSpan = document.getElementById("footerYear");
    if (yearSpan) {
        const year = new Date().getFullYear();
        yearSpan.textContent = year;
    }

    const footerBtn = document.getElementById("footerAlert");
    if (footerBtn) {
        footerBtn.addEventListener("click", () => {
            alert("Gracias por visitar el sitio!");
        });
    }
})();
