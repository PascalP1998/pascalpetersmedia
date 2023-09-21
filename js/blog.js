function getBlogposts() {
    return new Promise((resolve, reject) => {
        fetch("../blogposts.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Fehler beim Laden der JSON-Daten");
                }
                return response.json();
            })
            .then(blogposts => {
                resolve(blogposts); // Promise auflösen und Daten übergeben
            })
            .catch(error => {
                reject(error); // Fehlerbehandlung, falls etwas schief geht
            });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    getBlogposts().then(blogposts => {
        const savedBlogposts = blogposts.posts;
        const all_view = document.getElementById("all-posts");
        for (let postKey in savedBlogposts) {
            const post = savedBlogposts[postKey];
            const postElement = document.createElement("div");
            postElement.classList.add("blogpost");
            if (localStorage["mode"] == "dark") {
                postElement.classList.add("dark-mode");
            }
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <h3>${post.date}</h3>
                <img src="${post.image}" alt="${post.title}" />
                <p class="font-serif">${post.text}</p>
                `;
            all_view.appendChild(postElement);
        }
    });
});