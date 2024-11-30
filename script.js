const quotes = [
    "Empieza donde estás, usa lo que tienes, haz lo que puedas.",
    "El amor propio es el comienzo de una aventura para toda la vida.",
    "Tienes el poder de cambiar el rumbo de tu vida hoy.",
    "La valentía no es la ausencia de miedo, es actuar a pesar de él.",
    "La creatividad es inteligencia divirtiéndose.",
    "Eres más capaz de lo que imaginas."
];

const gratitudes = [
    "Hoy agradece tu salud.",
    "Agradece las personas que te aman.",
    "Agradece tener un techo donde dormir.",
    "Hoy agradece las pequeñas victorias.",
    "Agradece la oportunidad de crecer cada día.",
    "Agradece la naturaleza que te rodea.",
    "Agradece las oportunidades que el universo te brinda."
];

function updateClock() {
    const now = new Date();

    // Actualiza la fecha
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('date').textContent = date;

    // Actualiza la hora
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('time').textContent = time;

    // Actualiza la frase motivadora según la hora
    const hour = now.getHours();
    document.getElementById('quote').textContent = quotes[hour % quotes.length];

    // Actualiza la razón para agradecer según el día
    const day = now.getDay();
    document.getElementById('gratitude').textContent = "Razón para agradecer: " + gratitudes[day % gratitudes.length];
}

// Actualiza cada segundo
setInterval(updateClock, 1000);
updateClock();
