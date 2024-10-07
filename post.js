let currentPage = 1;
const postsPerPage = 12;
let isLoading = false;

function fetchPosts() {
  if (isLoading) return;
  isLoading = true;
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
      currentPage++;
      isLoading = false;
    });
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    fetchPosts();
  }
}

fetchPosts();

globalThis.addEventListener("scroll", handleScroll);
