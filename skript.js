const API_KEY = "84dae4f9c4a141bca5360546260801";

async function getWeather() {
    const location = document.getElementById("locationInput").value;
    if (!location) return;

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=1&aqi=yes&alerts=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("locationName").innerText =
            `${data.location.name}, ${data.location.country}`;

        const hours = data.forecast.forecastday[0].hour;
        const container = document.getElementById("hourlyWeather");
        container.innerHTML = "";

        hours.forEach(hour => {
            const card = document.createElement("div");
            card.className = "hour-card";

            card.innerHTML = `
                <h3>${hour.time.split(" ")[1]}</h3>
                <p>🌡 Temperature: ${hour.temp_c} °C</p>
                <p>🌧 Precipitation: ${hour.precip_mm} mm</p>
                <p>💧 Humidity: ${hour.humidity}%</p>
                <p>☁ Cloud Cover: ${hour.cloud}%</p>
                <p>🌬 Wind: ${hour.wind_kph} km/h (${hour.wind_dir})</p>
                <p>🔽 Pressure: ${hour.pressure_mb} mb</p>
                <p>☔ Rain Chance: ${hour.chance_of_rain}%</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        alert("Unable to fetch weather data.");
        console.error(error);
    }
}
