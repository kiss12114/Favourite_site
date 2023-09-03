// Sample JSON data for categories and websites
let categoriesData = [
    { id: 1, name: "News" },
    { id: 2, name: "Entertainment" }
];

let websitesData = [
    { id: 1, name: "CNN", url: "https://www.cnn.com", categoryId: 1 },
    { id: 2, name: "BBC", url: "https://www.bbc.com", categoryId: 1 },
    { id: 3, name: "Netflix", url: "https://www.netflix.com", categoryId: 2 }
];

// Function to display categories and websites
function displayCategories() {
    const categoryList = document.getElementById("category-list");
    categoryList.innerHTML = "";
    categoriesData.forEach(category => {
        const listItem = document.createElement("li");
        listItem.textContent = category.name;
        listItem.addEventListener("click", () => displayWebsites(category.id));
        categoryList.appendChild(listItem);
    });
}

function displayWebsites(categoryId) {
    const websiteList = document.getElementById("website-list");
    websiteList.innerHTML = "";
    const filteredWebsites = websitesData.filter(website => website.categoryId === categoryId);
    filteredWebsites.forEach(website => {
        const websiteItem = document.createElement("div");
        websiteItem.innerHTML = `<a href="${website.url}" target="_blank">${website.name}</a>`;
        websiteList.appendChild(websiteItem);
    });
}

function populateCategorySelect() {
    const categorySelect = document.getElementById("category-select");
    categorySelect.innerHTML = "";
    categoriesData.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

// Function to add a new website
function addWebsite(name, url, categoryId) {
    const newWebsite = {
        id: websitesData.length + 1,
        name: name,
        url: url,
        categoryId: categoryId
    };
    websitesData.push(newWebsite);
}

// Event listener for form submission
const websiteForm = document.getElementById("website-form");
websiteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const websiteName = document.getElementById("website-name").value;
    const websiteUrl = document.getElementById("website-url").value;
    const categorySelect = document.getElementById("category-select");
    const selectedCategoryId = parseInt(categorySelect.value);

    addWebsite(websiteName, websiteUrl, selectedCategoryId);
    displayCategories();
    displayWebsites(selectedCategoryId);

    // Clear form fields
    websiteForm.reset();
});

// Initial display
displayCategories();
populateCategorySelect();
