// Function to parse URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to display game details
function displayGameDetails() {
    const gameId = getUrlParameter('id');
    const gameDetails = document.getElementById('game-details');
    if (gameId && games[gameId]) {
        const game = games[gameId];
        const gameDetailsHtml = `
            <h2 class="game-title">${game.title}</h2>
            <p class="game-description">${game.description}</p>
        `;
        gameDetails.innerHTML = gameDetailsHtml;
    } else {
        gameDetails.innerHTML = '<p>Game details not found.</p>';
    }
}

// Call the function to display game details when the page loads
window.onload = displayGameDetails;
