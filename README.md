Apps Overview
1. Recipe App
The Recipe App allows users to search for recipes, view detailed instructions, save their favorites, and get nutritional information.

Features:
Search Functionality: Search for recipes by ingredients or dish names with auto-suggest.
Display Recipes: Recipes are shown in a grid with images, names, preparation times, and brief descriptions.
Recipe Details Page: Detailed view of each recipe with ingredients, step-by-step instructions, nutritional info, and optional user ratings/reviews.
Favorites Feature: Users can save favorite recipes and access them later. Local storage ensures favorites persist after page refresh.
API:
Spoonacular Recipe API: You need to sign up on Spoonacular and get an API key to interact with the API.
2. Movies App
The Movies App helps users discover movies, read details about them, and create a watchlist for future viewing.

Features:
Search Functionality: Search for movies by title with an auto-suggest feature.
Display Movies: Movies are displayed in a grid with posters, titles, and release dates. Sort by popularity, release date, or rating.
Movie Details Page: Clicking on a movie shows its synopsis, rating, runtime, cast, crew, user reviews, and trailers/clips.
Watchlist Feature: Add movies to a personal watchlist. Local storage retains your watchlist even after refreshing the page.
API:
The Movie Database (TMDb) API: You need to sign up on TMDb and get an API key to use the API.
3. Weather App
The Weather App provides weather details for cities, including current weather and a 5-day forecast.

Features:
Search Functionality: Search for weather by city name with auto-suggest feature.
Current Weather Display: Shows temperature, humidity, wind speed, and weather conditions with an icon.
5-Day Forecast: Display a 5-day forecast with high/low temperatures, weather conditions, and icons.
Location Feature: Get weather for your current location using geolocation.
Unit Toggle: Switch between Celsius and Fahrenheit for temperature display.
API:
OpenWeather API: You need to sign up on OpenWeather and get an API key to use the API.
How to Run the Applications
Prerequisites:
You need an internet connection.
For Recipe App and Movies App, you'll need to sign up for API keys (see APIs section above).
Running the Apps:

Clone the Repository:

bash
git clone https://github.com/rhmtv/Front-end-project-2-applications.git
Navigate to the desired app directory:

bash
cd recipe-app     # For Recipe App
cd movies-app      # For Movies App
cd weather-app     # For Weather App
Open the index.html file in your browser to run the app:

bash
open index.html

Configure the API keys:

For the Recipe App, open the JavaScript file and replace the API key placeholder with your Spoonacular API key.
For the Movies App, replace the TMDb API key in the script.
For the Weather App, set your OpenWeather API key in the script.
Screenshots
1. Recipe App
![Снимок экрана 2024-11-12 234718](https://github.com/user-attachments/assets/4418145e-95f7-4964-90cd-8e08ec9d08d7)


2. Movies App
![Снимок экрана 2024-11-12 234624](https://github.com/user-attachments/assets/57e56354-d399-47dd-8821-1b70223929a8)


3. Weather App
![Снимок экрана 2024-11-12 234544](https://github.com/user-attachments/assets/d220937a-8fe0-4044-b5fe-ad75d1cb8e27)
