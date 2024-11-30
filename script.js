const quotes = [
    "Empieza donde estás, usa lo que tienes, haz lo que puedas.",
    "El amor propio es el comienzo de una aventura para toda la vida.",
    "Tienes el poder de cambiar el rumbo de tu vida hoy.",
    "La valentía no es la ausencia de miedo, es actuar a pesar de él.",
    "La creatividad es inteligencia divirtiéndose.",
    "Eres más capaz de lo que imaginas.",
    "Eres más fuerte de lo que crees y más capaz de lo que imaginas.",
    "El poder de cambiar tu vida está en tus manos.",
    "Cuando tomas decisiones valientes, creas resultados extraordinarios.",
    "Los límites solo existen si tú los permites.",
    "Hoy es el día perfecto para empezar algo increíble.",
    "No esperes oportunidades, créalas.",
    "Cada paso que das te acerca a tu mejor versión.",
    "El fracaso no es el fin, es el comienzo de algo mejor.",
    "La perseverancia transforma sueños en realidad.",
    "El cambio no es cómodo, pero siempre vale la pena.",
    "Ámate tanto que no necesites la validación de nadie.",
    "Tu valor no está definido por lo que otros piensan de ti.",
    "Cuidarte a ti mismo es el acto más puro de amor.",
    "Eres suficiente, exactamente como eres.",
    "Haz las paces con tu pasado y abrázate en el presente.",
    "Eres digno de amor, respeto y alegría, siempre.",
    "Mereces todo lo bueno que la vida tiene para ofrecer.",
    "No te compares; cada camino es único y valioso.",
    "Sé tu mayor fanático, no tu peor crítico.",
    "Cuando te amas a ti mismo, enseñas a otros cómo tratarte.",
    "La creatividad no tiene reglas, solo posibilidades.",
    "Explora, experimenta, equivócate: así nacen las mejores ideas.",
    "Tus ideas merecen ser escuchadas, aunque aún estén en borrador.",
    "La inspiración vive en cada rincón, solo tienes que observar.",
    "Atrévete a pensar diferente; lo común no cambia el mundo.",
    "La creatividad es el arte de conectar lo aparentemente desconectado.",
    "No temas al juicio; crea porque el mundo necesita tu visión única.",
    "Todo lo que imaginas tiene el potencial de convertirse en realidad.",
    "Crea con el corazón, perfecciona con la mente.",
    "Las mejores ideas nacen en momentos de caos."
];

const gratitudes = [
    "Por tener un cuerpo que te permite moverte y experimentar el mundo.",
    "Por cada respiración que tomas de forma natural y sin esfuerzo.",
    "Por tu capacidad de sentir, escuchar, ver y tocar.",
    "Por la energía que tienes para afrontar cada día.",
    "Por tener la oportunidad de cuidar y nutrir tu salud.",
    "Por el calor del sol que ilumina tus días.",
    "Por los sonidos de la naturaleza que te conectan con la vida.",
    "Por la lluvia que refresca la tierra.",
    "Por la inmensidad del cielo y su recordatorio de infinitas posibilidades.",
    "Por las estrellas que inspiran sueños y deseos.",
    "Por las personas que te aman tal como eres.",
    "Por los amigos que te acompañan en los momentos buenos y malos.",
    "Por las lecciones que aprendes de quienes cruzan tu camino.",
    "Por los abrazos sinceros que llenan el corazón.",
    "Por las palabras amables que has recibido cuando más las necesitabas.",
    "Por cada oportunidad que tienes para aprender algo nuevo.",
    "Por los errores que te han hecho más sabio y fuerte.",
    "Por los retos que te han enseñado a crecer y a ser valiente.",
    "Por tu capacidad de cambiar y reinventarte cuando es necesario.",
    "Por los sueños que te impulsan a seguir adelante.",
    "Por tener un techo sobre tu cabeza que te protege.",
    "Por los alimentos que nutren tu cuerpo.",
    "Por las pequeñas cosas, como una taza de café caliente o un buen libro.",
    "Por la música que inspira y alegra tus días.",
    "Por los momentos de tranquilidad que encuentras entre el caos.",
    "Por las ideas que encienden tu creatividad y pasión.",
    "Por los momentos de amor propio que te reconectan contigo mismo.",
    "Por las risas que iluminan incluso los días más grises.",
    "Por la esperanza que siempre está ahí, incluso en los momentos difíciles.",
    "Por el regalo del presente, un nuevo día lleno de posibilidades.",
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
    document.getElementById('gratitude').textContent = "Hoy agradece por: " + gratitudes[day % gratitudes.length];
}

// Actualiza cada segundo
setInterval(updateClock, 1000);
updateClock();
