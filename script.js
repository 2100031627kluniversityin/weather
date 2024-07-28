async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "41d58804c2f785710de003520fd5761c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather-info").innerHTML =
      "<p>Failed to retrieve weather data.</p>";
  }
}

function displayWeather(data) {
  if (data.cod === "404") {
    document.getElementById("weather-info").innerHTML =
      "<p>City not found.</p>";
    return;
  }

  const { name, main, weather, wind } = data;
  const weatherInfo = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
    `;
  document.getElementById("weather-info").innerHTML = weatherInfo;
}
