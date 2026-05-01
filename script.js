const card = document.getElementById('invitacionCard');
const btnWhatsApp = document.getElementById('btnWhatsApp');

// Manejar el giro de la carta
card.addEventListener('click', function(e) {
    // Si el clic viene del botón de WhatsApp, no giramos la carta
    if (e.target.id === 'btnWhatsApp') return;
    
    card.classList.toggle('flipped');
});

// Configurar el enlace de WhatsApp
btnWhatsApp.addEventListener('click', function(e) {
    e.preventDefault(); // Evitamos que el enlace actúe por defecto
    
    const telefono = "573003189385";
    const mensaje = "¡Hola Diana y Germán! Recibí su invitación y confirmo mi asistencia al matrimonio. ¡Muchas gracias!";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
});
