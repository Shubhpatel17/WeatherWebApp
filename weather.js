//f96fe269913337415b585ebeeda3ebed

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "f96fe269913337415b585ebeeda3ebed",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?"

}

const searchInputbox = document.getElementById('input-box');

// Event listner function on keypress

searchInputbox.addEventListener('keypress', (Event) => {

    if (Event.keycode == 13) {
        console.log(searchInputbox.value);
        getweatherReport(searchInputbox.value);
    }
});

// get weather report

function getweatherReport(city) {
    fetch('${weatherApi.baseurl}?q=$(city) & appid=${weatherApi.key}&units=metric')
        .then(weather => {
            return weather.json();
        }).then(showweatherReport);
}

// show weather report

function showweatherReport(weather) {
    console.log(weather);
     
    let city = document.getElementById('city');
    city.innerText = '${weather.name}, ${weather.sys.country}';

    let temperature = document.getElementById('temp');
    temperature.innerHTML = '${math.round(weather.main.temp)}&deg;C';

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = '${math.floor(weather.main.temp_min)}$deg;C (min)/ ${math.ceil(weather.main.temp_max)}$deg;C (max)';

    let weathertype = document.getElementById('weather');
    weathertype.innerText = '${weather.weather[0].main}';

    let date = document.getElementById('date');
    let todayDate = new date();
    date.innerHTML = dataManage(todayDate);
}
 

if (weatherType.textcontent == 'clear') {
    document.body.style.backgroundImage = 'url(clear.jpg)';
} 
   else if (weatherType.textcontent == 'cloud') {
    document.body.style.backgroundImage = 'url(cloud.jpg)';
} 
   else if (weatherType.textcontent == 'sunny') {
    document.body.style.backgroundImage = 'url(sunny.jpg)';
} 
   else if (weatherType.textcontent == 'rain') {
    document.body.style.backgroundImage = 'url(rain.jpg)';
}
   else if (weatherType.textcontent == 'snow') {
    document.body.style.backgroundImage = 'url(snow.jpg)';
}  
   else if (weatherType.textcontent == 'thunderstorm') {
    document.body.style.backgroundImage = 'url(thunderstorm.jpg)';
} 


// date manage
   
function dataManage(dateArg) {
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullyear();
    let month = months[dateArg.getmonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getday()];

    return '${date} ${month} (${day}) ${year}';
}

    
