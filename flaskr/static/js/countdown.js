let countdownValue = 10; // Numero di secondi iniziale
let countdownID;

// Funzione per avviare o resettare il countdown
function startOrResetCountdown() {
    const countdownElement = document.getElementById('countdown');


    if (countdownID) {
        clearInterval(countdownID); //stop
    }

    countdownValue = 10;
    countdownElement.textContent = countdownValue; //reset


    countdownID = setInterval(() => {
        countdownValue -= 1;
        countdownElement.textContent = countdownValue; //new countdown

        if (countdownValue <= 0) {
            clearInterval(countdownID);
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
