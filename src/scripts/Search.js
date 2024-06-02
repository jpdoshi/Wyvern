const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});

searchBtn.addEventListener("click", () => {
  const query = searchBar.value;
  if (query.startsWith("http://") || query.startsWith("https://")) {
    // webView.src = query;
    window.location = query;
  } else {
    window.location = `https://google.com/search?q=${query}`;
  }
});
