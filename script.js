const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
function searchFunction() {
  const searchBar = document.getElementById('search-bar');
  const searchTerm = searchBar.value.toLowerCase();
  
  const items = document.querySelectorAll('.items');

  items.forEach(item => {
    const name = item.querySelector('.img').getAttribute('data-name').toLowerCase();

    // Show the item only if its name starts with the search term
    if (name.startsWith(searchTerm)) {
      item.style.display = "block"; // Show the item
    } else {
      item.style.display = "none";  // Hide the item
    }
  });
}


