// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Load top 5 news
    fetch("data/news.json")
        .then((res) => res.json())
        .then((data) => {
            const newsList = document.getElementById("news-list");
            data.slice(0, 5).forEach((item) => {
                const li = document.createElement("li");
                li.textContent = `${item.date} – ${item.title}`;
                newsList.appendChild(li);
            });
        });

    // Load top 5 publications
    fetch("data/publications.json")
        .then((res) => res.json())
        .then((data) => {
            const pubsList = document.getElementById("pubs-list");
            data.slice(0, 5).forEach((item) => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${item.authors}</strong>. ${item.title}. <em>${item.journal}</em>, ${item.year}.`;
                pubsList.appendChild(li);
            });
        });
});
