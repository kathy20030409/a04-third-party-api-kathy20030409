async function getWeather() {
    const apiKey = 'e2dba1ce746e6b1edb1062456735871f';
    const city = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherDescription = data.weather[0].main;
        const temp = data.main.temp;

        document.getElementById('weather-result').innerHTML = `Current weather in ${city}: ${weatherDescription}, Temperature: ${temp}°C`;

        getImage(weatherDescription);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function getImage(query) {
    const apiKey = '43537402-4af63367fbf787b95144f0eab';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const imageUrl = data.hits[0].webformatURL;

        document.getElementById('image-container').innerHTML = `<img src="${imageUrl}" alt="Weather Image">`;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
