
const apiKey = "ce09dd39e298aa3b20451b7d5a97d951";

const container = document.getElementById('container')
let city_name = "";

const searchButton = document.getElementById('changeForm');
const searchForm =document.getElementById('search');
const wrapper = document.getElementById('wrapper');
const input = document.getElementById('searchInput');
const cityTextDiv =document.getElementById('cityText');
const textCity = document.createElement('p');
textCity.classList.add('textCity');
const resultImg = document.getElementById('dayMainImg1');
const loadingDiv = document.getElementById('loading');

const cityResultDiv = document.getElementById('cityResult');

const windSpeed = document.getElementById('windSpeed');

const dayMainImg = document.getElementById('dayMainImg');
// const dayMainIcon = document.createElement('img');
const dayMainTemp = document.getElementById('dayMainText');

const dayMainName = document.getElementById('dayMainName');

const day1Img = document.getElementById('day1Img');
const day1Temp = document.getElementById('day1Temp');
const day1Name = document.getElementById('day1Name');


const day2Img = document.getElementById('day2Img');
const day2Temp = document.getElementById('day2Temp');
const day2Name = document.getElementById('day2Name');

const day3Img = document.getElementById('day3Img');
const day3Temp = document.getElementById('day3Temp');
const day3Name = document.getElementById('day3Name');

const day4Img = document.getElementById('day4Img');
const day4Temp = document.getElementById('day4Temp');
const day4Name = document.getElementById('day4Name');

// const day5Img = document.getElementById('day5Img');
// const day5Temp = document.getElementById('day5Temp');
// const day5Name = document.getElementById('day5Name');


searchButton.addEventListener('click', () => {
    searchForm.style.display = 'none';
    wrapper.style.display = 'block'; 
    loadingDiv.style.display = 'block'; 
    city_name = input.value;
    getWeatherForecast(city_name);
    container.style.display = 'none';
});

function showLoading() {
    loadingDiv.style.display = 'block'; 
    wrapper.style.display = 'none'; 
}

function hideLoading() {
    loadingDiv.style.display = 'none';
    wrapper.style.display = 'block'; 
}

function getWeatherIconUrl(conditionCode){
    const weatherConditionImages = {
        '01d': './sun.png', 
        '02d': './cloudy.png', 
         '03d': './cloudy.png', 
        '03n': './cloudy.png', 
        '04d': './cloudy.png',
         '04n': './cloudy.png', 
         '09d': './rain.png', 
         '09n': './rain.png',
        '10d': './rain.png', 
       '10n': './rain.png', 
        '13d': './snow.png', 
       '13n': './snow.png', 
    };

    // Check if the condition code is in the mappings, and return the corresponding image URL
    if (conditionCode in weatherConditionImages) {
        return weatherConditionImages[conditionCode];
    } else {
        // Default to a generic image if the condition is not mapped
        return './sun.png';
    }
}

function getDayName(timestamp){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(timestamp * 1000);
    return days[date.getDay()];
}

function displayWeatherForecast(city, forecasts){
    textCity.textContent = `${city}`;
    cityTextDiv.appendChild(textCity);

    const todayForecast = forecasts[0];
    dayMainTemp.textContent = `${Math.round(todayForecast.main.temp)}°`;
  //  dayMainDay.textContent = `Date: ${getDayName(todayForecast.dt)}`;
    dayMainImg.src = getWeatherIconUrl(todayForecast.weather[0].icon);
    // dayMainDiv.appendChild(dayMainTemp);
    // dayMainDiv.appendChild(dayMainDay);
    // dayMainImgDiv.appendChild(dayMainIcon);
    resultImg.src = getWeatherIconUrl(todayForecast.weather[0].icon);
   dayMainName.textContent = `${getDayName(todayForecast.dt)}`;

   windSpeed.textContent = `${todayForecast.wind.speed} m/s`;


    const forecast1 = forecasts[1];
    day1Img.src = getWeatherIconUrl(forecast1.weather[0].icon);
    day1Temp.textContent = ` ${Math.round(forecast1.main.temp)}°C`;
    day1Name.textContent = `${getDayName(forecast1.dt)}`;

    const forecast2 = forecasts[2];
    day2Img.src = getWeatherIconUrl(forecast2.weather[0].icon);
    day2Temp.textContent = `${Math.round(forecast2.main.temp)}°C`;
    day2Name.textContent = `${getDayName(forecast2.dt)}`;

    const forecast3 = forecasts[3];
    day3Img.src = getWeatherIconUrl(forecast3.weather[0].icon);
    day3Temp.textContent = `${Math.round(forecast3.main.temp)}°C`;
    day3Name.textContent = `${getDayName(forecast3.dt)}`;

    const forecast4 = forecasts[4];
    day4Img.src = getWeatherIconUrl(forecast4.weather[0].icon);
    day4Temp.textContent = `${Math.round(forecast4.main.temp)}°C`;
    day4Name.textContent = `${getDayName(forecast4.dt)}`;

    // const forecast5 = forecasts[5];
    // day5Img.src = getWeatherIconUrl(forecast5.weather[0].icon);
    // day5Temp.textContent = `${Math.round(forecast5.main.temp)}°C`;
    // day5Name.textContent = `${getDayName(forecast5.dt)}`;

    
}

function getWeatherForecast(city_name){
    showLoading(); // Show loading icon while waiting for the API
    let apiLink = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${apiKey}&units=metric`;
    fetch(apiLink)
        .then(response => response.json())
        .then(data => {
            const dailyForecasts = data.list.filter((forecast, index) => index % 8 === 0);
            displayWeatherForecast(city_name, dailyForecasts);
            hideLoading(); // Hide loading icon when data is available
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            hideLoading(); // Hide loading icon in case of an error
        });
}



function setCurrentTime() {
    // Get the current date and time
    var currentTime = new Date();

    // Get the hours, minutes, and seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    
    var timeString = hours + ":" + minutes + ":" + seconds;

    
    document.getElementById("nowTime").textContent = timeString;
}

// Call the setCurrentTime function to set the time initially
setCurrentTime();

