# Weather Forecast Web Application

A simple weather forecasting web application that allows users to search for a city and view the current weather and forecast for the next few days. It uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data and displays it dynamically.

## Features

- Search for a city to get real-time weather data.
- Displays the current temperature, wind speed, and an icon representing the weather.
- Forecast for the next four days, including temperature and weather conditions.
- Displays a loading spinner while waiting for data.
- Responsive layout and user-friendly interface with a clean and simple design.

## Technologies Used

- HTML, CSS, JavaScript
- [OpenWeatherMap API](https://openweathermap.org/api) for weather data
- [FontAwesome](https://fontawesome.com/) for icons

## Project Structure

- `index.html`: The main HTML structure of the page.
- `style.css`: The CSS file for styling the application.
- `script.js`: JavaScript to handle the API calls, display weather data, and manage dynamic content.
- `assets/`: Folder containing additional assets like images for weather icons.

## Setup and Usage

1. **Get API Key**:
   - Sign up on [OpenWeatherMap](https://openweathermap.org/) and get your API key.

2. **Update API Key**:
   - In `script.js`, replace `const apiKey = "YOUR_API_KEY";` with your actual API key.

3. **Run Locally**:
   - Open `index.html` in a web browser.

4. **Search for Weather**:
   - Enter a city name in the search box and click the search button.
   - The app will display the current weather and a forecast for the upcoming days.

## Code Explanation

### HTML (`index.html`)

- The main structure of the app, including:
  - Search input and button.
  - Sections for displaying current and forecasted weather.

### CSS (`style.css`)

- Styles the application with a background image, modern font, and layout adjustments.
- Uses `flex` for alignment and positioning of weather information and forecast sections.

### JavaScript (`script.js`)

- **Main Components**:
  - `getWeatherForecast(city)`: Fetches weather data for the specified city.
  - `displayWeatherForecast(city, forecasts)`: Renders the current and forecasted weather.
  - `getWeatherIconUrl(conditionCode)`: Maps weather conditions to icons.

- **Dynamic Updates**:
  - The search button triggers an API call and updates the page with current weather data.
  - `setCurrentTime()` shows the current time, updating every second.

## Screenshots

- **Main Screen**: Displays search box.
- **Weather Display**: Shows city name, current weather, and four-day forecast.

## API Usage

- Uses OpenWeatherMap's `5 Day / 3 Hour Forecast` API to retrieve weather data.
- The API URL in `script.js` is constructed as follows:

  ```javascript
  const apiLink = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${apiKey}&units=metric`;

------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Recipe Finder Web Application

A recipe search and management web application that allows users to search for recipes, view details, and save their favorite recipes for easy access. This app uses the [Spoonacular API](https://spoonacular.com/food-api) for fetching recipe data.

## Features

- **Recipe Search**: Users can search for recipes by entering keywords and view recipe cards with basic information.
- **Favorites**: Recipes can be saved to a favorites list using browser local storage, allowing users to access their favorite recipes easily.
- **Recipe Details**: Clicking on a recipe card displays detailed information, including ingredients, instructions, and nutritional data, in a modal popup.
- **Auto-suggestions**: Displays suggestions as the user types in the search bar.
- **Responsive Design**: Adapts well on mobile, tablet, and desktop screens.

## Technologies Used

- HTML, CSS, JavaScript
- [Spoonacular API](https://spoonacular.com/food-api) for recipe data
- Local storage for managing favorites

## Project Structure

- `index.html`: The main HTML file containing the structure and layout of the application.
- `style.css`: Contains all the styling for the app, including layout, buttons, and modals.
- `script.js`: JavaScript file that handles the API requests, dynamic content rendering, and managing favorites.
- `assets/`: Folder for images and additional assets, if any.

## Setup and Usage

1. **Get API Key**:
   - Sign up on [Spoonacular](https://spoonacular.com/) and generate an API key.

2. **Update API Key**:
   - Replace `const apiKey = 'YOUR_API_KEY';` with your Spoonacular API key in `script.js`.

3. **Run Locally**:
   - Open `index.html` in a web browser.

4. **Search Recipes**:
   - Enter keywords in the search bar and click "Search" to view recipes.
   - Click "Add to Favorites" to save recipes to your favorites list.

## Code Explanation

### HTML (`index.html`)

- **Header**: Contains the title, search input, and buttons for searching recipes and viewing favorites.
- **Sections**:
  - **Recipe Grid**: Displays the list of recipes in a grid format.
  - **Favorites Section**: Shows the list of saved favorite recipes.
  - **Modal**: Popup for displaying detailed recipe information.

### CSS (`style.css`)

- **General Styling**: Includes basic styles for font, colors, and layout adjustments.
- **Header**: Styling for the header, search bar, and buttons.
- **Recipe Grid**: Arranges recipe cards in a responsive grid layout.
- **Recipe Cards**: Adds hover effects and shadows for recipe cards.
- **Modal**: Styles for the modal popup, including positioning, animation, and close button styling.
- **Favorites Section**: Displays saved recipes similarly to the recipe grid.

### JavaScript (`script.js`)

- **API Calls**:
  - `loadRandomRecipes()`: Fetches random recipes to display on the main page.
  - `searchRecipes()`: Searches for recipes based on the user input.
  - `showRecipeDetails(recipeId)`: Fetches and displays detailed information for a selected recipe.

- **Favorites Management**:
  - `addToFavorites(recipeId)`: Adds a recipe to the favorites list in local storage.
  - `removeFromFavorites(recipeId)`: Removes a recipe from the favorites list.
  - `toggleFavorites()`: Toggles between the recipe grid and the favorites view.
  - `displayFavorites(favorites)`: Renders favorite recipes from local storage.

- **Auto-Suggestions**:
  - `fetchAutoSuggestions()`: Fetches and displays suggestions as the user types in the search bar.

## Screenshots

- **Home Screen**: Shows search bar and random recipes.
- **Recipe Details Modal**: Displays recipe details, ingredients, and instructions.
- **Favorites Section**: Lists saved favorite recipes.

## API Usage

- Uses the **Spoonacular Recipe API** to fetch recipes and detailed information.

  ```javascript
  const apiLink = `https://api.spoonacular.com/recipes/random?number=8&apiKey=${apiKey}`;

------------------------------------------------------------------------------------------------------------------------------------------------------------------



