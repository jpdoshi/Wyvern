const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();

    searchBar.readonly = true;
    searchBtn.disabled = true;
  }
});

searchBtn.addEventListener("click", () => {
  const query = searchBar.value;

  searchBar.readonly = true;
  searchBtn.disabled = true;

  if (query.startsWith("http://") || query.startsWith("https://")) {
    window.location = query;
  } else {
    window.location = `https://google.com/search?q=${query}`;
  }
});
