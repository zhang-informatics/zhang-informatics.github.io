// news.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("data/news.json")
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("news-list");
            data.slice(0, 5).forEach(item => {
                const div = document.createElement("div");
                div.className = "news-item";
                div.innerHTML = `
          <h3>${item.title}</h3>
          <p class="news-date">${item.date}</p>
          <p>${item.content || ""}</p>
        `;
                list.appendChild(div);
            });
        });
});
