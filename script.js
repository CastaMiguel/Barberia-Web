// Inicialización de la base de datos de citas
if (!localStorage.getItem('citas')) {
    localStorage.setItem('citas', JSON.stringify([]));
}

function getCitas() {
    return JSON.parse(localStorage.getItem('citas'));
}

function saveCitas(citas) {
    localStorage.setItem('citas', JSON.stringify(citas));
}

// Gestión de temas (Claro / Oscuro)
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
        toggleBtn.textContent = savedTheme === 'light' ? 'Modo Oscuro' : 'Modo Claro';
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            toggleBtn.textContent = newTheme === 'light' ? 'Modo Oscuro' : 'Modo Claro';
        });
    }
});

// Sistema de Notificaciones Toast
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        toast.addEventListener('animationend', () => toast.remove());
    }, 3000);
}