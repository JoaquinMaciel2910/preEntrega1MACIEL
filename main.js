// Objeto para representar al jugador
const jugador = {
  nombre: "",
  puntaje: 0,
};

// Objeto para representar a la computadora
const computadora = {
  nombre: "Computadora",
  puntaje: 0,
};

// Array para almacenar el historial de rondas
const historial = [];

// Función para obtener la elección del jugador
function obtenerEleccionJugador() {
  const opciones = ["piedra", "papel", "tijera"];
  const eleccion = prompt("Elige piedra, papel o tijera:").toLowerCase();

  if (opciones.includes(eleccion)) {
    return eleccion;
  } else {
    console.log("Elección inválida. Por favor, elige piedra, papel o tijera.");
    return obtenerEleccionJugador();
  }
}

// Función para determinar el resultado del juego y actualizar puntajes
function jugarPiedraPapelTijera() {
  let continuarJugando = true;
  jugador.nombre = prompt("Ingresa tu nombre:");

  while (continuarJugando) {
    const eleccionJugador = obtenerEleccionJugador();
    const eleccionComputadora = obtenerEleccionComputadora();
    console.log(`${jugador.nombre} eligió: ${eleccionJugador}`);
    console.log(`${computadora.nombre} eligió: ${eleccionComputadora}`);
    const resultado = determinarGanador(eleccionJugador, eleccionComputadora);
    console.log(resultado);

    // Actualizar puntajes
    if (resultado === "Ganaste") {
      jugador.puntaje++;
    } else if (resultado === "La computadora ganó") {
      computadora.puntaje++;
    }

    // Registrar la ronda en el historial
    historial.push({
      jugador: eleccionJugador,
      computadora: eleccionComputadora,
      resultado: resultado,
    });

    console.log(`${jugador.nombre}: ${jugador.puntaje} puntos`);
    console.log(`${computadora.nombre}: ${computadora.puntaje} puntos`);

    const respuesta = prompt("¿Quieres jugar otra ronda? (s/n)").toLowerCase();
    if (respuesta !== "s") {
      continuarJugando = false;
    }
  }

  console.log("Gracias por jugar.");
  mostrarHistorial();
}

// Función para mostrar el historial de rondas
function mostrarHistorial() {
  console.log("Historial de rondas:");
  historial.forEach((ronda, indice) => {
    console.log(`Ronda ${indice + 1}: ${ronda.jugador} vs ${ronda.computadora} - Resultado: ${ronda.resultado}`);
  });

  // Utilizar filter para filtrar las rondas ganadas por el jugador
  const rondasGanadasPorJugador = historial.filter(ronda => ronda.resultado === "Ganaste");
  console.log(`Rondas ganadas por ${jugador.nombre}: ${rondasGanadasPorJugador.length}`);
}

// Función para obtener la elección de la computadora de forma aleatoria
function obtenerEleccionComputadora() {
  const opciones = ["piedra", "papel", "tijera"];
  const eleccionAleatoria = opciones[Math.floor(Math.random() * 3)];
  return eleccionAleatoria;
}

// Función para determinar el resultado del juego
function determinarGanador(eleccionJugador, eleccionComputadora) {
  if (eleccionJugador === eleccionComputadora) {
    return "Empate";
  } else if (
    (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
    (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
    (eleccionJugador === "tijera" && eleccionComputadora === "papel")
  ) {
    return "Ganaste";
  } else {
    return "La computadora ganó";
  }
}

// Iniciar el juego
jugarPiedraPapelTijera();
  