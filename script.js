

document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    const apiKey = "f49d8fb8cc1ee32cbd1bd7ff35717047";
    const cityInput = document.getElementById("input-box");
    const searchButton = document.getElementById("searchBtn");
    const errorElement = document.getElementById("error-message");
    const wheather1 = document.getElementById("wheather-img");
  
    function fetchWeatherData(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          )
            .then((response) => response.json())
            .then((data) => {
              document.getElementById("country").innerHTML = data.name;
              document.getElementById("temperature").innerHTML =
                Math.round(data.main.temp - 273.15) + "°C";
              document.getElementById("humidity").innerHTML = data.main.humidity + "%";
              document.getElementById("wind").innerHTML = data.wind.speed + " Kmph";
              if(data.weather[0].main == "Clear"){
                wheather1.src="images/clear.png"
              }
              else if(data.weather[0].main == "Clouds"){
                wheather1.src="images/clouds.png";
              }
              else if(data.weather[0].main == "Rain"){
                wheather1.src="images/rain.png";
              }
              else if(data.weather[0].main == "Drizzle"){
                wheather1.src="images/drizzle.png";
              }
              else if(data.weather[0].main == "Mist"){
                wheather1.src="images/mist.png";
              }
              else if(data.weather[0].main == "Snow"){
                wheather1.src="images/snow.png";
              }
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
              errorElement.innerHTML = "Error fetching weather data."; // Update the error message element
            });
    }
  
    searchButton.addEventListener("click", () => {
      const city = cityInput.value.trim();
      fetchWeatherData(city);
    });
  });
  


