document.querySelector('button').addEventListener('click', () => {
    const input = document.getElementById('input');
    const place = input.value;

    fetch(`http://api.weatherapi.com/v1/current.json?key=de729b0c3f7e42dfa7f91407261404&q=${place}&aqi=no`)
    .then((response) => response.json())
    .then((data) => {

        // 🌤️ Weather Icon
        document.getElementById("myImage").src = "https:" + data.current.condition.icon;

        // 🌡️ Temperature
        document.querySelector('.temp').innerText = data.current.temp_c + "°C";

        // 📍 City Name
        document.querySelector('.city').innerText = data.location.name;

        // 💧 Humidity
        document.querySelector('.humidity').innerText = data.current.humidity + "%";

        // 🌬️ Wind Speed
        document.querySelector('.wind').innerText = data.current.wind_kph + " km/h";

    })
    .catch((error) => {
        console.log("Error:", error);
    });
});