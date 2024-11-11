const apiKey = '60f4335308794d4d8ba1df52588ac623';

document.addEventListener('DOMContentLoaded', () => {
    loadRandomRecipes();
});

// Получаем случайные рецепты для отображения по умолчанию
async function loadRandomRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=8&apiKey=${apiKey}`);
    const data = await response.json();
    displayRecipes(data.recipes);
}

// Поиск рецептов на основе ввода пользователя
async function searchRecipes() {
    const query = document.getElementById('search-input').value; // Исправлено на search-input
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`);
    const data = await response.json();
    document.getElementById('recipes-grid').innerHTML = '';
    displayRecipes(data.results);
}

// Отображаем рецепты в карточках
function displayRecipes(recipes) {
    const recipesGrid = document.getElementById('recipes-grid');
    recipesGrid.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>Ready in ${recipe.readyInMinutes || 'N/A'} minutes</p>
            <div class="button-container">
                <button class="card-button" onclick="showRecipeDetails(${recipe.id})">View Recipe</button>
                <button class="card-button add-to-favorites" onclick="addToFavorites(${recipe.id})">Add to Favorites</button>
            </div>
        `;
        recipesGrid.appendChild(recipeCard);
    });
}

// Показать детали рецепта в модальном окне
async function showRecipeDetails(recipeId) {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
    const recipe = await response.json();

    const details = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>Ingredients</h3>
        <ul>${recipe.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join('')}</ul>
        <h3>Instructions</h3>
        <p>${recipe.instructions || 'No instructions available.'}</p>
        <h3>Nutritional Info</h3>
        <p>Calories: ${recipe.nutrition?.nutrients[0]?.amount || 'N/A'} kcal</p>
    `;
    
    document.getElementById('recipe-details').innerHTML = details;
    document.getElementById('recipe-modal').style.display = 'flex'; // Центральное положение модального окна
}

// Закрыть модальное окно
function closeModal() {
    document.getElementById('recipe-modal').style.display = 'none';
}

// Добавление рецепта в избранное
function addToFavorites(recipeId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(recipeId)) {
        favorites.push(recipeId);  // Добавляем только ID
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Recipe added to favorites!');
    }
}

// Удаление рецепта из избранного
function removeFromFavorites(recipeId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== recipeId);  // Убедитесь, что это только ID
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites(favorites); // Обновляем список избранных после удаления
}


// Переключение между основным экраном и избранным
function toggleFavorites() {
    const recipesSection = document.getElementById('recipes-section');
    const favoritesSection = document.getElementById('favorites-section');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favorites.length > 0) {
        favoritesSection.style.display = 'block';  // Показываем избранное
        recipesSection.style.display = 'none';    // Скрываем основной список рецептов
        displayFavorites(favorites);              // Отображаем избранные рецепты
    } else {
        alert("No favorites added yet!");
    }
}

// Отображение списка избранных рецептов
async function displayFavorites(favorites) {
    const favoritesGrid = document.getElementById('favorites-list');
    favoritesGrid.innerHTML = ''; // Очищаем список перед добавлением новых

    for (const id of favorites) {
        // Убедитесь, что id - это просто число (или строка), а не объект
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
        
        // Если ошибка в запросе, можно добавить проверку на успешный ответ
        if (!response.ok) {
            console.error(`Ошибка при получении данных для рецепта с ID: ${id}`);
            continue;  // Пропускаем этот рецепт
        }

        const recipe = await response.json();

        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <div class="button-container">
                <button class="card-button" onclick="showRecipeDetails(${recipe.id})">View Recipe</button>
                <button class="card-button remove-favorites" onclick="removeFromFavorites(${recipe.id})">Remove from Favorites</button>
            </div>
        `;
        favoritesGrid.appendChild(recipeCard);
    }
}



