fetch('data/grants.json')
    .then(response => response.json())
    .then(data => {
        const activeContainer = document.getElementById('active-grants');
        const completedContainer = document.getElementById('completed-grants');

        data.forEach(grant => {
            const card = document.createElement('div');
            card.className = 'grant-card';

            // If link exists, wrap the title with an anchor
            const titleHTML = grant.link
                ? `<a href="${grant.link}" target="_blank" rel="noopener" class="grant-link"><h3>${grant.title}</h3></a>`
                : `<h3>${grant.title}</h3>`;

            let costHTML = grant.cost ? `<p class="grant-cost"><strong>Funding:</strong> ${grant.cost}</p>` : '';

            card.innerHTML = `
              ${titleHTML}
              <p class="grant-role"><strong>Role:</strong> ${grant.role}</p>
              <p class="grant-agency"><strong>Agency:</strong> ${grant.agency}</p>
              <p class="grant-dates"><strong>Dates:</strong> ${grant.dates}</p>
              ${costHTML}
            `;


            if (grant.status === 'active') {
                activeContainer.appendChild(card);
            } else {
                completedContainer.appendChild(card);
            }
        });
    })
    .catch(error => {
        console.error("Failed to load grant data:", error);
    });
