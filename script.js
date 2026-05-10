const audio = document.getElementById('musica');
const card = document.getElementById('invitacionCard');
const btnWhatsApp = document.getElementById('btnWhatsApp');


card.addEventListener('click', function(e) {

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
document.addEventListener('click', () => {
    audio.play();
}, { once: true });
