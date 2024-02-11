document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('#dark-mode-toggle');

    // Agrega un controlador de eventos al interruptor
    toggleSwitch.addEventListener('change', switchTheme, false);

    function switchTheme() {
        // Si el interruptor está activado, cambia a modo oscuro
        if (toggleSwitch.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            // Si el interruptor está desactivado, cambia a modo claro
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
});