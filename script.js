document.getElementById('getWeather').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'f0ca170ca6d312dcd6d7c0717413e10c';  // Remplacez 'VOTRE_CLE_API' par votre véritable clé API OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Ville non trouvée');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const location = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById('location').textContent = location;
    document.getElementById('temperature').textContent = `Température : ${temperature}°C`;
    document.getElementById('description').textContent = `Description : ${description}`;
}
