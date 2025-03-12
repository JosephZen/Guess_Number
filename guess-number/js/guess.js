
document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');

    // Listen for Enter key press in the input field
    guessInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { // Check if the pressed key is "Enter"
            guessButton.click(); // Trigger the button's click event
        }
    });

    // Button click logic
    guessButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value);
        const resultText = document.getElementById('result');
        const trailCount = document.getElementById('trailCount');

        if (isNaN(guess) || guess < 1 || guess > 100) {
            resultText.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        // Your existing logic for handling the guess
        let trailsLeft = parseInt(trailCount.textContent);
        trailsLeft--;
        trailCount.textContent = trailsLeft;

        if (guess === targetNumber) {
            resultText.textContent = "Congratulations! You guessed the correct number!";
            resultText.style.color = "green";
            disableInputAndButton();
        } else if (trailsLeft === 0) {
            resultText.textContent = `Game over! The correct number was ${targetNumber}.`;
            resultText.style.color = "red";
            disableInputAndButton();
        } else {
            resultText.textContent = guess < targetNumber ? "Too low! Try again." : "Too high! Try again.";
            resultText.style.color = "black";
        }
        guessInput.value = "";
    });

    // Disable input and button after game ends
    function disableInputAndButton() {
        guessInput.disabled = true;
        guessButton.disabled = true;
    }

    // Target number for the game
    const targetNumber = Math.floor(Math.random() * 100) + 1;
});
