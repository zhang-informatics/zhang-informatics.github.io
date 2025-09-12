document.addEventListener("DOMContentLoaded", () => {
    fetch("data/publications.json")
        .then((res) => res.json())
        .then((data) => {
            const container = document.getElementById("pub-container");
            const tagFilter = document.getElementById("tag-filters");

            const allTags = new Set();
            data.forEach(pub => (pub.tags || []).forEach(tag => allTags.add(tag)));

            // Create tag buttons
            const tagArray = Array.from(allTags).sort();
            tagArray.forEach(tag => {
                const btn = document.createElement("button");
                btn.className = "tag-filter-button";
                btn.innerText = tag;
                btn.addEventListener("click", () => {
                    document.querySelectorAll(".tag-filter-button").forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    renderPubs(data.filter(pub => (pub.tags || []).includes(tag)));
                });
                tagFilter.appendChild(btn);
            });

            // Add "All" button
            const allBtn = document.createElement("button");
            allBtn.innerText = "All";
            allBtn.className = "tag-filter-button active";
            allBtn.addEventListener("click", () => {
                document.querySelectorAll(".tag-filter-button").forEach(b => b.classList.remove("active"));
                allBtn.classList.add("active");
                renderPubs(data);
            });
            tagFilter.insertBefore(allBtn, tagFilter.firstChild);

            // Initial render
            renderPubs(data);
        });

    function renderPubs(data) {
        const container = document.getElementById("pub-container");
        container.innerHTML = "";

        data.forEach(pub => {
            const wrapper = document.createElement("div");
            wrapper.className = "pub-item";

            const imageHTML = pub.image
                ? `<div class="pub-img-wrapper"><img src="${pub.image}" alt="Figure"></div>`
                : "";

            wrapper.innerHTML = `
        ${imageHTML}
        <div class="pub-content">
          <div class="pub-title">${pub.title}</div>
          <div class="pub-authors">${pub.authors}</div>
          <div class="pub-venue">${pub.journal}, ${pub.year}</div>
          <div class="pub-tags">
            ${(pub.tags || []).map(tag => `<span class="pub-tag">${tag}</span>`).join("")}
          </div>
        </div>
      `;

            container.appendChild(wrapper);
        });
    }
});
