// ======== MENU HAMBURGER ========
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}

// ======== CHECKBOXES ========
const boxes = document.querySelectorAll("input[type='checkbox']");

boxes.forEach(box => {
    // Carrega estado salvo
    if (localStorage.getItem(box.id) === "true") {
        box.checked = true;
    }

    // Salva quando muda
    box.addEventListener("change", () => {
        localStorage.setItem(box.id, box.checked);
    });
});
