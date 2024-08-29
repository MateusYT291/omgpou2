let happiness = 100;
let hunger = 0;

// Atualiza os status na tela
function updateStatus() {
    document.getElementById('happiness').textContent = happiness;
    document.getElementById('hunger').textContent = hunger;
}

// Alimenta o bichinho
function feedPet() {
    if (hunger > 0) {
        hunger -= 10;
        happiness += 5;
        if (hunger < 0) hunger = 0;
        updateStatus();
    }
}

// Brinca com o bichinho
function playWithPet() {
    if (happiness < 100) {
        happiness += 10;
        hunger += 5;
        if (happiness > 100) happiness = 100;
        updateStatus();
    }
}

// Diminui a felicidade e aumenta a fome ao longo do tempo
setInterval(() => {
    hunger += 1;
    happiness -= 1;
    if (happiness < 0) happiness = 0;
    if (hunger > 100) hunger = 100;
    updateStatus();
}, 1000);
