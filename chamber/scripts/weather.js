const weatherSection = document.getElementById('weather');
const forecastSection = document.getElementById('forecast');
const APIKey = '568425f9d1ec93d03699f81bec6b65e2';

const renderWeather = (weatherData) => {
  const html = `
    <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="${weatherData.weather[0].description} icon" width="50" height="50">
    <div class="weatherInfo">
      <p>City: ${weatherData.name}</p>
      <p>${Number(weatherData.main.temp).toFixed(0)}&deg;F</p>
      <p>${weatherData.weather[0].description}</p>
      <p>Low: ${weatherData.main.temp_min}&deg;F</p>
      <p>High: ${weatherData.main.temp_max}&deg;F</p>
    </div>
  `;
  weatherSection.innerHTML += html;
};

const getWeatherInfo = async (path) => {
  const response = await fetch(path);
  try {
    if (!response.ok) throw new Error('Network Response failed...');
    const weatherData = await response.json();
    renderWeather(weatherData);
  } catch (error) {
    console.log(error);
  }
};

const renderForecast = (forecastData) => {
  const dates = [];
  let html = '';
  forecastData.forEach(day => {
    const date = day.dt_txt.split(' ')[0];
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (!dates.includes(date) && dates.length < 3) {
      dates.push(date);
      const dayOfWeek = daysOfWeek[new Date(date).getDay()];

      html += `
        <p>${dayOfWeek}: ${day.main.temp}&deg;F</p>
      `;
    }
  })
  forecastSection.innerHTML += html;
};

const getForecastInfo = async (path) => {
  const response = await fetch(path);
  try {
    if (!response.ok) throw new Error('Network Response failed...');
    const forecastData = await response.json();
    renderForecast(forecastData.list);
  } catch (error) {
    console.log(error);
  }
};

getWeatherInfo(`https://api.openweathermap.org/data/2.5/weather?q=aurora&units=imperial&appid=${APIKey}`);
getForecastInfo(`https://api.openweathermap.org/data/2.5/forecast?q=aurora&units=imperial&appid=${APIKey}`);