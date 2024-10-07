fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".post-container").innerText = data.title;
  });
