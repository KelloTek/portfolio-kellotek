const profileDiv = document.getElementById("profile")
const reposDiv = document.getElementById("repos")

const token = "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"

async function fetchGithubProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(!response.ok) {
            throw new Error(`GitHub user not found: ${response.statusText}`)
        }
        const data = await response.json()

        const profileHTML = `
            <div class="flex flex-col items-end">
                <h2 class="text-2xl font-bold">${data.name || data.login}</h2>
                <a href="${data.html_url}" target="_blank" class="no-underline text-custom-blue">Voir mon profil GitHub</a>
            </div>
            <img src="${data.avatar_url}" alt="${data.login}'s avatar" class="flex w-[80px] rounded-[50px] ml-5">`

        profileDiv.innerHTML = profileHTML
    } catch (error) {
        profileDiv.innerHTML = `<p>Error: ${error.message}</p>`
    }
}

async function fetchGithubRepos(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(!response.ok) {
            throw new Error(`GitHub repos not found: ${response.statusText}`)
        }
        const repos = await response.json()

        const reposHTML = repos.map(repo => `
            <div class="border-custom-blue border-2 p-[10px] rounded-xl hover:bg-custom-blue-2">
                <h3 class="text-xl font-bold text-custom-blue"><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p class="m-[5px] mb-5 text-custom-gray">${repo.description || "No description available."}</p>
                <div class="flex items-end">
                    <p class="text-sm">Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                </div>
            </div>
            `).join("")

        reposDiv.innerHTML = reposHTML
    } catch (error) {
        reposDiv.innerHTML = `<p>Error: ${error.message}</p>`
    }
}

const username = "KelloTek"
fetchGithubProfile(username)
fetchGithubRepos(username)