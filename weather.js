function updateWeather() {
  const locations = [
    {
      name: "Tokyo",
      latitude: 35.6895,
      longitude: 139.6917,
    },
    {
      name: "Gjøvik",
      latitude: 60.7963,
      longitude: 10.68452,
    },
    {
      name: "London",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    {
      name: "Sydney",
      latitude: -33.8688,
      longitude: 151.2093,
    },
    {
      name: "Cairo",
      latitude: 30.0444,
      longitude: 31.2357,
    },
  ];

  locations.forEach((location) => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`,
    )
      .then((response) => response.json())
      .then((weatherData) => {
        displayWeather(weatherData, location.name);
      });
  });

  function displayWeather(weatherData, locationName) {
    const container = document.querySelector(".weather-container");

    const weatherDiv = document.createElement("div");
    weatherDiv.classList.add("weather-location");

    weatherDiv.innerHTML = `
      <h3>Current Weather in ${locationName}</h3>
      <p>Temperature: ${weatherData.current_weather.temperature} °C</p>
      <p>Wind Speed: ${weatherData.current_weather.windspeed} km/h</p>
      <p>Wind Direction: ${weatherData.current_weather.winddirection}°</p>
      <p>Observation Time: ${weatherData.current_weather.time}</p>`;

    container.appendChild(weatherDiv);
  }
}

updateWeather();

setInterval(updateWeather, 300000);
