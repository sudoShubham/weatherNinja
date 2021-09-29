const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  //   const cityDetails = data.cityDetails;
  //   const weatherDetails = data.weatherDetails;

  const { cityDetails, weatherDetails } = data;

  details.innerHTML = `
         <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weatherDetails.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weatherDetails.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
    
    `;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  let imgSrc = weatherDetails.IsDayTime ? "./img/day.svg" : "./img/night.svg";
  //   if (weatherDetails.IsDayTime) {
  //     imgSrc = "./img/day.svg";
  //   } else {
  //     imgSrc = "./img/night.svg";
  //   }

  time.setAttribute("src", imgSrc);

  const iconSrc = `./img/icons/${weatherDetails.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
};

const updateCity = async (city) => {
  //   console.log(city);
  const cityDetails = await getCity(city);
  const weatherDetails = await getWeather(cityDetails.Key);

  return {
    // cityDetails: cityDetails,
    // weatherDetails: weatherDetails,

    cityDetails,
    weatherDetails,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));
  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
