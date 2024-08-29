const clothingItems = [{
        id: 1,
        name: "T-shirt",
        description: "Casual T-shirt"
    },
    {
        id: 2,
        name: "Jeans",
        description: "Blue jeans"
    },
    {
        id: 3,
        name: "Dress",
        description: "Red evening dress"
    },
    {
        id: 4,
        name: "Jacket",
        description: "Leather jacket"
    },
    {
        id: 5,
        name: "Shoes",
        description: "Running shoes"
    },
];

const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-results");

searchBar.addEventListener("input", (e) => {
    const searchQuery = e.target.value.trim().toLowerCase();
    if (searchQuery.length > 2) {
        const filteredItems = clothingItems.filter((item) => {
            return item.name.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);
        });
        displaySearchResults(filteredItems);
    } else {
        searchResults.style.display = "none";
    }
});

function displaySearchResults(items) {
    searchResults.style.display = "block";
    const ul = document.createElement("ul");
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.description}`;
        ul.appendChild(li);
    });
    searchResults.innerHTML = "";
    searchResults.appendChild(ul);
}