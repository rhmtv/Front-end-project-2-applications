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
