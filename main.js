function obtenerJugadaUsuario() {
    var jugada = prompt("Elige: piedra, papel o tijera").toLowerCase();
    if (jugada !== "piedra" && jugada !== "papel" && jugada !== "tijera") {
        alert("Por favor, elige una opción válida.");
        return obtenerJugadaUsuario();
    }
    return jugada;
}

function obtenerJugadaComputadora() {
    var opciones = ["piedra", "papel", "tijera"];
    var indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if (jugadaUsuario === jugadaComputadora) {
        return "¡Es un empate!";
    }

    switch (jugadaUsuario) {
        case "piedra":
            return jugadaComputadora === "tijera" ? "¡Ganaste!" : "¡Perdiste!";
        case "papel":
            return jugadaComputadora === "piedra" ? "¡Ganaste!" : "¡Perdiste!";
        case "tijera":
            return jugadaComputadora === "papel" ? "¡Ganaste!" : "¡Perdiste!";
    }
}

function jugarPiedraPapelTijera() {
    for (var i = 0; i < 3; i++) {
        var jugadaUsuario = obtenerJugadaUsuario();
        var jugadaComputadora = obtenerJugadaComputadora();
        var resultado = determinarGanador(jugadaUsuario, jugadaComputadora);
        alert("Tú elegiste: " + jugadaUsuario + "\nLa computadora eligió: " + jugadaComputadora + "\nResultado: " + resultado);
    }
}

jugarPiedraPapelTijera();
