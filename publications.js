// publications.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("data/publications.json")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("pub-container");
            const grid = document.createElement("div");
            grid.className = "pub-grid";
            data.forEach(pub => {
                const card = document.createElement("div");
                card.className = "pub-card";
                card.innerHTML = `
          ${pub.image ? `<img src="${pub.image}" alt="Figure" class="pub-image">` : ''}
          <div class="pub-title">${pub.title}</div>
          <div class="pub-authors">${pub.authors}</div>
          <div class="pub-venue">${pub.journal}, ${pub.year}</div>
        `;
                grid.appendChild(card);
            });
            container.appendChild(grid);
        });
});
