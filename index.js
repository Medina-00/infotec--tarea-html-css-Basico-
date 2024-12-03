
    // Seleccionamos el botón de menú y el contenedor del menú
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Añadimos un evento de click al botón de menú
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show'); // Toggle para mostrar y ocultar el menú
    });
    var map = L.map('map').setView([51.505, -0.09], 13); // Coordenadas de ejemplo (Londres)
    
    // Cargar los datos de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Añadir un marcador en la ubicación
    var marker = L.marker([18.50571, -69.8568079]).addTo(map); // Puedes cambiar estas coordenadas
    marker.bindPopup("<b>Nuestra Ubicaccion</b><br>MegaCentro").openPopup();
