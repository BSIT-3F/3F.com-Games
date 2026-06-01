// This array holds all the game data. 
// Just add, remove, or edit objects here when a group submits their project.
const gamesData = [
    {
        title: "STI Dodgeball",
        developer: "Troysillo",
        thumbnail: "assets/STI Dodgeball Thumbnail.jpg",
        link: "https://deloranern.github.io/Web-System-Game/"
    },
    {
        title: "Cyberguard: Defenders of STI WNU",
        developer: "Shadow Squad",
        thumbnail: "assets/Cyberguard.jpg",
        link: "https://cyberguardstiwnu.netlify.app/"
    },
    {
        title: "TA KAZZ: Way Finder of Lost Trails",
        developer: "KNYTZ REPRESENT",
        thumbnail: "assets/Ta Kazz.png",
        link: "https://magenta-chimera-54d4b0.netlify.app/"
    },
    {
        title: "Game Title 4",
        developer: "Nicole Warrior",
        thumbnail: "assets/images/placeholder4.jpg",
        link: "https://example.com/game4"
    },
    {
        title: "Pacific Clash: World War 2 Naval Battle",
        developer: "Jolly Roger",
        thumbnail: "assets/Pacific Clash.png",
        link: "https://pacific-clash.netlify.app/"
    }
];

// Function to render the games to the DOM
function loadGames() {
    const gridContainer = document.getElementById('game-grid');
    const countBadge = document.getElementById('game-count');
    
    // Update the game count badge
    countBadge.textContent = `${gamesData.length} Games`;

    // Loop through the data and create HTML for each card
    gamesData.forEach(game => {
        // Create the anchor tag wrapper (opens in new tab)
        const card = document.createElement('a');
        card.href = game.link;
        card.target = "_blank";
        card.className = "game-card";

        // Construct the inner HTML of the card
        card.innerHTML = `
            <div class="thumbnail-container">
                <img src="${game.thumbnail}" alt="${game.title} Thumbnail" onerror="this.src='https://via.placeholder.com/300x160/2a2a2a/ffffff?text=Image+Missing'">
            </div>
            <div class="card-info">
                <h3>${game.title}</h3>
                <p>By ${game.developer}</p>
            </div>
        `;

        // Append the completed card to the grid
        gridContainer.appendChild(card);
    });
}

// Run the function when the page loads
window.onload = loadGames;