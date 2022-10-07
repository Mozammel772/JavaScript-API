const API_KEY = `9f264e17d76431ac82600acb403d1922`;
const searchtemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaytemperature(data));
};
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displaytemperature = temperature => {
     setInnerText('city', temperature.name);
     setInnerText('temperature', temperature.main.temp);
     setInnerText('condition', temperature.weather[0].main);
    // console.log(temperature);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url)
};
