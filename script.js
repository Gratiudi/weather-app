function searchFunction(event) {
  event.preventDefault();
  let city1 = document.querySelector("#city");
  let city = city1.value;
  let apiKey = "fb05o0ab323256cef37t4ba2f5c3a9ed";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
function displayWeather(response) {
  console.log(response.data);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  let temperature = document.querySelector(".value");
  temperature.innerHTML = Math.round(response.data.temperature.current);
}
let today = new Date();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hour = today.getHours();
let minute = today.getMinutes();
if (hour < 10) {
  hour = "0" + hour;
}
if (minute < 10) {
  minute = "0" + minute;
}
let day = week[today.getDay()];
let date = document.querySelector(".date");
date.innerHTML = `${day} ${hour}:${minute}`;

let search = document.querySelector(".search-form");
search.addEventListener("submit", searchFunction);
