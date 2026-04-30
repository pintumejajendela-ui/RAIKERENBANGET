const games = [
    { title: "Dino Run", img: "https://placeholder.com", link: "#" },
    { title: "Snake Pro", img: "https://placeholder.com", link: "#" },
    { title: "Shadow Fighter", img: "https://placeholder.com", link: "#" },
    { title: "Space Shooter", img: "https://placeholder.com", link: "#" }
];

const container = document.getElementById('game-container');

function displayGames(gameList) {
    container.innerHTML = "";
    gameList.forEach(game => {
        const card = `
            <div class="game-card" onclick="window.location.href='${game.link}'">
                <img src="${game.img}" alt="${game.title}">
                <h3>${game.title}</h3>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Tampilkan semua game saat pertama kali buka
displayGames(games);