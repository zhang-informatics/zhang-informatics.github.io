// Load scrollable news into main page
fetch("data/news.json")
    .then((res) => res.json())
    .then((data) => {
        const scrollContainer = document.getElementById("news-scroll");
        data.forEach((item) => {
            const div = document.createElement("div");
            div.className = "news-scroll-item";
            div.innerHTML = `
        <h4>${item.title}</h4>
        <p class="news-date">${item.date}</p>
        <p>${item.content || ""}</p>
      `;
            scrollContainer.appendChild(div);
        });
    });
