// Fetch GitHub Data and Display Repositories
document.addEventListener("DOMContentLoaded", function() {
    const githubUsername = 'mraihaan22';
    const repoList = document.getElementById('repo-list');

    // Fetch GitHub Repositories using GitHub API
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=created&per_page=5`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const repoItem = document.createElement('div');
                repoItem.classList.add('repo-item');
                repoItem.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available.'}</p>
                    <a href="${repo.html_url}" target="_blank">View Repository</a>
                `;
                repoList.appendChild(repoItem);
            });
        })
        .catch(error => {
            repoList.innerHTML = `<p>Error loading repositories. Please try again later.</p>`;
        });

    // Terminal typing effect
    const terminalText = [
        "> Booting up...\n",
        "> Accessing profile...\n",
        "> Welcome to my world, hacker!\n"
    ];
    
    let index = 0;
    const terminal = document.querySelector('.terminal');
    
    function typeText() {
        if (index < terminalText.length) {
            let line = terminalText[index];
            terminal.innerHTML += `<p>${line}</p>`;
            index++;
            setTimeout(typeText, 1000); // Delay for each line
        }
    }

    typeText(); // Start typing animation
});
