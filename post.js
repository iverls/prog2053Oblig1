const postsPerPage = 12;

fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}`)
  .then((response) => response.json())
  .then((posts) => {
    const postContainer = document.querySelector(".post-container");

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      postElement.innerHTML = `
<h3>${post.title}</h3>
<p>${post.body}</p>`;

      postContainer.appendChild(postElement);
    });
  });
