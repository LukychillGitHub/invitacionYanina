document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("NoBtn");
    const siBtn = document.getElementById("SiBtn");

    function moverBoton() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // Para PC (mouse)
    noBtn.addEventListener("mouseenter", moverBoton);

    // Para móvil (tocar)
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault(); // Evita que se registre el tap
        moverBoton();
    });

    // Botón "Sí"
    siBtn.addEventListener("click", () => {
        window.location.href = "invitacion.html";
    });
});
