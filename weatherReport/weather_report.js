// https://openweathermap.org/current
function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiGeocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},,US&limit=1&appid=${apiKey}`;

    let latitude;
    let longitude;

    fetch(apiGeocodingUrl)
        .then(response => response.json())
        .then(data => {
            latitude = data[0].lat;
            longitude = data[0].lon;

            console.log(latitude, longitude);

            const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            fetch(apiWeatherUrl)
                .then(response => response.json())
                .then(data => {
                    const weatherInfo = document.getElementById('weatherInfo');
                    weatherInfo.innerHTML = `<h2>Weather in ${city}</h2>
                                      <p>Temperature: ${data.main.temp} &#8451;</p>
                                      <p>Weather: ${data.weather[0].description}</p>`;
                })

        .catch(error => {
                console.error('Error fetching weather:', error);
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
            });
        });

}

const apiKey = '7229364fb2a48bb89350b6a7ace04498';

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );