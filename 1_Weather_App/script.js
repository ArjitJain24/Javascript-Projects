const apiKey = "9c4a0f0362abce411ca8725d26a131d1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  //   const weatherClass = document.querySelector(".weather");
  //   weatherClass.style.display = "block";

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    const errorMsg = document.querySelector(".error");
    errorMsg.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
  const data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".temp").innerHTML = `${Math.round(
    data.main.temp
  )}&deg; C`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

  const weatherCondition = data.weather[0].main;
  const icon = document.querySelector(".weather img");
  icon.src = `images/${weatherCondition}.png`;
}

const form = document.querySelector(".getcity");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchBox = document.querySelector(".getcity input");
  let city = searchBox.value;
  checkWeather(city);
});
