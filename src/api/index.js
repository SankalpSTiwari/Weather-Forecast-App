const baseURL =
  'http://api.weatherapi.com/v1/current.json?key=95cb1a5b390847a89b842712230511';

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};
