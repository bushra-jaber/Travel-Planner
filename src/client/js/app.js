const apiKeyGeonames = 'bushrajaber12'; 
const apiKeyWeatherbit = 'fc919991d3f84c2da45e6baa3941d391';
const apiKeyPixabay = '36321904-9ac5004dfd2288011aa37f6d3';

export const mainFunction = () => {
    document.getElementById('form').addEventListener('submit', handleSubmit);
};

const handleSubmit = async (event) => {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;

    const locationData = await getCoordinates(location);
    const weather = await getWeather(locationData.lat, locationData.lng, date);
    const image = await getImage(location);

    updateUI(weather, image, locationData, date);
    document.getElementById('locationInfo').classList.add('show');
};

const getCoordinates = async (location) => {
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${apiKeyGeonames}`);
    const data = await response.json();
    return {
        lat: data.geonames[0].lat,
        lng: data.geonames[0].lng,
        city: data.geonames[0].name,
        country: data.geonames[0].countryName,
    };
};

const getWeather = async (lat, lng, date) => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${apiKeyWeatherbit}&days=1`);
    const data = await response.json();
    return {
        temp: data.data[0].temp,
        description: data.data[0].weather.description,
        icon: data.data[0].weather.icon,
    };
};

const getImage = async (location) => {
    const response = await fetch(`https://pixabay.com/api/?key=${apiKeyPixabay}&q=${encodeURIComponent(location)}&image_type=photo`);
    const data = await response.json();
    return data.hits.length > 0 ? data.hits[0].webformatURL : '';
};

const updateUI = (weather, image, locationData, tripDate) => {
    const today = new Date();
    const targetDate = new Date(tripDate);
    const timeDiff = targetDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 

    document.getElementById('locationInfo').innerHTML = `
        <h3>Location Information</h3>
        City: ${locationData.city}<br>
        Country: ${locationData.country}<br><br>
        <h3>Weather</h3>
        Weather: ${weather.temp}°C<br>
        Description: ${weather.description}<br>
        <img src="https://www.weatherbit.io/static/img/icons/${weather.icon}.png" alt="${weather.description}"><br><br>
        <h3>Trip Details</h3>
        Date: ${tripDate}<br>
        Days left: ${daysLeft} days<br>
        Flight Time: TBD<br>
        <img src="${image}" alt="Trip Image" style="width:100%;"><br><br>
        <button id="saveTrip" class="save-button">Save Trip</button>
        <button id="removeTrip" class="remove-button">Remove Trip</button>
    `;

    document.getElementById('saveTrip').addEventListener('click', saveTrip);
    document.getElementById('removeTrip').addEventListener('click', removeTrip);
};

function saveTrip() {
    const tripData = {
        location: document.getElementById('location').value,
        date: document.getElementById('date').value
    };

    localStorage.setItem('savedTrip', JSON.stringify(tripData));
    console.log('Trip saved!');
}

function removeTrip() {
    localStorage.removeItem('savedTrip');
    console.log('Trip removed!');
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

document.addEventListener('DOMContentLoaded', mainFunction);