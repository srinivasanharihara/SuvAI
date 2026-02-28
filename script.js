const list = document.getElementById("recipe-list");
const search = document.getElementById("search");

// show recipes
function showRecipes(data) {
  list.innerHTML = "";
  data.forEach(r => {
    list.innerHTML += `
      <div class="card" onclick="openRecipe('${r.name}')">
        <img src="${r.image}">
        <h3>${r.name}</h3>
        <p>${r.cuisine}</p>
      </div>
    `;
  });
}

// open recipe page
function openRecipe(name) {
  window.location.href =
    "recipe.html?name=" + encodeURIComponent(name);
}

// initial load
const saved = JSON.parse(localStorage.getItem("recipes")) || [];
const allRecipes = recipes.concat(saved);
showRecipes(allRecipes);

// search
search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = allRecipes.filter(r =>
    r.name.toLowerCase().includes(value)
  );
  showRecipes(filtered);
});