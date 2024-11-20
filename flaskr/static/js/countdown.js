let countdownValue = 10; // Numero di secondi iniziale
let countdownInterval; // Variabile per salvare l'ID del setInterval

// Funzione per avviare o resettare il countdown
function startOrResetCountdown() {
    const countdownElement = document.getElementById('countdown');

    // Se c'è un countdown in corso, fermalo
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Reimposta il valore iniziale
    countdownValue = 10;
    countdownElement.textContent = countdownValue;

    // Avvia il nuovo countdown
    countdownInterval = setInterval(() => {
        countdownValue -= 1;
        countdownElement.textContent = countdownValue;

        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "0"; // Imposta a 0 alla fine
        }
    }, 1000);
}

// Event listener sul pulsante
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
        startOrResetCountdown(); // Avvia o resetta il countdown al clic
    });
});

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}