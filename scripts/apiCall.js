const key = "WTI7K1wAI0sLhh4LdS8X9xl5z6GJ24Rj";

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}/?apikey=${key}`;
  const requestLink = base + query;
  const response = await fetch(requestLink);
  const data = await response.json();
  //   console.log(data);
  return data[0];
};

const getCity = async (city) => {
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
  const query = `?apikey=${key}&q=${city}`;
  const requestLink = base + query;
  const response = await fetch(requestLink);
  const data = await response.json();
  //   console.log(data[0].Key);
  return data[0];
};

// getCity("Nashik")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getWeather(189304);
