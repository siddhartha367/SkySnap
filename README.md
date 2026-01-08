SkySnap Website
A clean, modern, dark-themed weather website that displays hourly weather forecasts for any location entered by the user.

✨ Features
Search weather by location name
Hourly weather forecast
Temperature (°C)
Precipitation (mm)
Humidity (%)
Cloud cover (%)
Wind speed & direction
Atmospheric pressure (mb)
Probability of rain
Fully responsive (mobile & desktop)

🛠 Technologies Used
HTML – Page structure
CSS – Dark UI design and layout
JavaScript – API handling & dynamic content
WeatherAPI – Real-time weather data

📂 Project Structure
skysnap/
│
├── index.html     # Main HTML file
├── style.css      # Dark theme styling
├── script.js      # Weather API logic
└── README.md      # Project documentation

🔑 API Used
WeatherAPI – Forecast Endpoint
https://api.weatherapi.com/v1/forecast.json

Parameters:
key – API key
q – Location name
days=1 – One-day forecast
aqi=yes – Air quality data
alerts=yes – Weather alerts

🧠 How It Works
User enters a location
JavaScript sends a request to WeatherAPI
API returns hourly forecast data
Data is dynamically converted into weather cards
CSS styles the output using a dark theme
