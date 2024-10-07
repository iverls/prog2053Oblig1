fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true`,
)
  .then((response) => response.json())
  .then((weather) => {
    document.querySelector(".weather-container").innerHTML = `
      <h3>Current Weather in Tokyo</h3>
      <p>Temperature: ${weather.current_weather.temperature} °C</p>
      <p>Wind Speed: ${weather.current_weather.windspeed} km/h</p>
      <p>Wind Direction: ${weather.current_weather.winddirection}°</p>
      <p>Observation Time: ${weather.current_weather.time}</p>`;
  });
