const apiKey = "b791ee64ebac25fd1bcade83a8435e92";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

// async function fetchWeatherData() {
//   fetch(`${apiUrl}&appid=${apiKey}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Current Temperature:", data.main.temp);
//       console.log("Humidity:", data.main.humidity);
//       console.log("Weather Description:", data.weather[0].description);
//     })
//     .catch((error) => console.error("Error:", error));
// }
document.addEventListener("DOMContentLoaded", () => {
  const weatherImages = document.querySelector(".weather-img img");
  console.log(weatherImages); // Check if the element is found

  if (!weatherImages) {
    console.error("Weather image element not found!");
    return; // Exit if the element is not found
  }

  const weatherImage = document.querySelector(".weather-image");
  const searchBar = document.querySelector(".search-bar");
  const searchBtn = document.querySelector(".icon");

  searchBtn.addEventListener("click", () => {
    const city = searchBar.value;
    fetchWeather(city);
  });
  async function fetchWeather(city) {
    const response = await fetch(`${apiUrl}q=${city}&appid=${apiKey}`);

    if (!response.ok) {
      console.error("HTTP error! status:", response.status);
      return;
    }

    if (!city) {
      alert("Please enter a city name");
      return;
    }

    var data = await response.json();
    console.log(data);

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.floor(data.main.temp) + "°c";
    document.querySelector("#hdity").innerHTML = data.main.humidity + "%";
    document.querySelector("#win-spee").innerHTML = data.wind.speed + "kmph";

    // if (data.weather[0].main === "Clouds") {
    //   document.querySelector(".weather-img").src = "wind.png";
    //   console.log(data.weather[0].main);

    //   // } else if (data.weather[0].main === "clear") {
    //   //   weather-img.src = "images/sun.png"; // Corrected variable name
    //   // } else if (data.weather[0].main === "Rain") {
    //   //   weatherImage.src =
    //   //     "C:Users\viperOneDriveDesktopweather projectimages\rainy-day.png"; // Corrected variable name
    //   // } else if (data.weather[0].main === "Snow") {
    //   //   weatherImage.src = "images/snowy.png"; // Corrected variable name
    //   // }
    // }

    const weatherCondition = data.weather[0].main.toLowerCase();
    if (weatherCondition === "clouds") {
      weatherImages.src = "images/cloud.png";
    } else if (weatherCondition === "clear") {
      weatherImages.src = "images/sun.png";
    } else if (weatherCondition === "rain") {
      weatherImages.src = "images/rainy.png";
    } else if (weatherCondition === "snow") {
      weatherImages.src = "images/snowy.png";
    } else {
      weatherImages.src = "images/rainbow.jpeg"; // Default image for other cases
    }

    // } catch (error) {
    //   console.error("Error fetching weather data:", error);
    // }

    // console.log(weather - img.src);

    // fetchWeather();

    document.addEventListener("DOMContentLoaded", () => {
      const searchBar = document.querySelector(".search-bar");
      searchBar.focus(); // search bar pe focus
    });
  }
});
