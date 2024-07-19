let form = document.querySelector('#weatherSearchForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let state = form.querySelector('#state').value

  if (!state) {
    alert('Please enter a state or city.')
    return
  }
  getWeatherInfo(state)
})

function getWeatherInfo(state) {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      state +
      '&appid=2d41127b0d15bdd19f083bbecf44ee7a'
  )
    .then((response) => response.json())
    .then(function (weather) {
      console.log(weather)
      document.querySelector('.state').textContent = weather.name
      document.querySelector('.weather-celcius').textContent = kelvinToCelsius(
        weather.main.temp
      )
      document.querySelector('.weather-desc').textContent =
        weather.weather[0].description
    })
    .catch((err) => console.log(err))
}

function kelvinToCelsius(k) {
  return `${(k - 273.15).toFixed(0)}°C`
}

document.addEventListener('DOMContentLoaded', () => {
  getWeatherInfo('Philippines')
})
