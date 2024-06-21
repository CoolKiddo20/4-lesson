function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function displayRandomNumber() {
    const randomNumber = getRandomNumber();
    const randomNumberDiv = document.getElementById('random-number');
    randomNumberDiv.textContent = randomNumber;
}

window.onload = displayRandomNumber;
