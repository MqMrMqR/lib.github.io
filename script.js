// Sample game data
let games = [
    { title: "Game 1", description: "Description for Game 1", image: "game1.jpg" },
    { title: "Game 2", description: "Description for Game 2", image: "game2.jpg" },
    { title: "Game 3", description: "Description for Game 3", image: "game3.jpg" }
    // Add more games as needed
];

// Function to generate game cards
function generateGameCards() {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = ''; // Clear previous game cards before generating new ones

    games.forEach((game, index) => {
        const card = document.createElement("div");
        card.classList.add("game-card");

        // Create a clickable link for each game card
        const link = document.createElement("a");
        link.href = `game.html?id=${index}`; // Link to game.html with game ID parameter

        // Create the content for the game card (title and image)
        const cardContent = document.createElement("div");

        // Create an image element for the game
        const image = document.createElement("img");
        image.src = game.image;
        image.alt = game.title;
        image.style.width = "250px"; // Set the width of the image
        image.style.height = "350px"; // Set the height of the image
        cardContent.appendChild(image); // Append the image to the card content

        // Create a title element for the game
        const title = document.createElement("h2");
        title.textContent = game.title;
        cardContent.appendChild(title); // Append the title to the card content

        // Append the card content to the link and the link to the card
        link.appendChild(cardContent);
        card.appendChild(link);

        // Append the card to the game container
        gameContainer.appendChild(card);
    });
}

// Function to save the games array to local storage
function saveGamesToLocalStorage() {
    localStorage.setItem('games', JSON.stringify(games));
}

// Function to load games from local storage
function loadGamesFromLocalStorage() {
    const savedGames = localStorage.getItem('games');
    if (savedGames) {
        games = JSON.parse(savedGames);
    }
}

// Call the function to load games from local storage when the page loads
window.onload = function() {
    loadGamesFromLocalStorage();
    generateGameCards();
};

// Function to add a new game card
function addGameCard(game) {
    games.push(game); // Add the new game to the games array
    saveGamesToLocalStorage(); // Save the updated games array to local storage
    generateGameCards(); // Re-generate game cards to display the new game
}

// Get the add game form element
const addGameForm = document.getElementById("add-game-form");
// Get the settings button element
const settingsButton = document.getElementById("settings-button");

// Add click event listener to the settings button
settingsButton.addEventListener("click", function() {
    // Navigate to the settings page
    window.location.href = "settings.html";
});

// Add event listener for form submission
addGameForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values entered by the user
    const title = document.getElementById("game-title").value;
    const description = document.getElementById("game-description").value;
    const image = document.getElementById("game-image").value;

    // Create a new game object
    const newGame = { title: title, description: description, image: image };

    // Add the new game card to the main library page
    addGameCard(newGame);

    // Reset the form fields
    addGameForm.reset();
});
