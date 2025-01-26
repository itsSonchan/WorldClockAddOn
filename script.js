let tardis = document.querySelector("#click-me");
tardis.addEventListener("click", showClock);

let selectedCity = null;

function showClock() {
  let placeholder = document.querySelector("#tardis");
  placeholder.innerHTML = `
  <img id="tiny-tardis"
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/155/275/original/tardis.png?1737396195"
        alt="tardis"
      />
  <div id="app">
      <h1>World clock</h1>
      <select name="city" id="city">
        <option value="" selected>Select a city</option>
                <option value="current">My current location</option>
        <option value="Europe/Berlin">Berlin</option>
        <option value="America/New_York">New York</option>
        <option value="Australia/Sydney">Sydney</option>
                <option value="Europe/Athens">Athens</option>
                <option value="America/Mexico_City">Mexico City</option>
                                <option value="Asia/Beirut">Beirut</option>
                        

      </select>
      <div class="citygroup" id="berlin">
        <div class="blockLeft">
          <h2 class="city">Berlin</h2>
          <div class="date"></div>
        </div>
        <div class="block-right">
          <div class="time"></div>
        </div>
      </div>
      <div class="citygroup" id="london">
        <div class="blockLeft">
          <h2 class="city">London</h2>
          <div class="date"></div>
        </div>
        <div class="block-right">
          <div class="time"></div>
        </div>
      </div>
      <div class="citygroup" id="tokyo">
        <div class="blockLeft">
          <h2 class="city" >Tokyo</h2>
          <div class="date"></div>
        </div>
        <div class="block-right">
          <div class="time"></div>
        </div>
      </div>
      <footer>
        This project was coded by Sonja and is open-sourced on
        <a href="https://github.com/itsSonchan/WorldClockAddOn">Github</a>
      </footer>
    </div>
    `;
  let citySelect = document.querySelector("#city");
  citySelect.addEventListener("change", updateCity);
  attachTinyTardisListener();
}

function updateClock() {
  updateCityDisplay("Europe/London", "#london");
  updateCityDisplay("Asia/Tokyo", "#tokyo");
  if (selectedCity) {
    updateCityDisplay(selectedCity, "#berlin");
  } else {
    updateCityDisplay("Europe/Berlin", "#berlin");
  }
}
setInterval(updateClock, 1000);

function updateCityDisplay(timezone, cityName) {
  let city = document.querySelector(cityName);
  let cityDate = city.querySelector(".date");
  cityDate.innerHTML = moment.tz(timezone).format("MMMM Do YYYY");
  let cityTime = city.querySelector(".time");
  cityTime.innerHTML = moment.tz(timezone).format("HH:mm:ss");
}

function updateCity(event) {
  let cityValue = event.target.value;
  if (!cityValue) {
    selectedCity = null;
    return;
  }
  if (cityValue === "current") {
    selectedCity = moment.tz.guess();
  } else {
    selectedCity = cityValue;
  }
  let cityNameDisplay = document.querySelector("#berlin .city");
  cityName = selectedCity.split("/")[1].replace("_", " ");
  cityNameDisplay.innerHTML = cityName;
  updateCityDisplay(selectedCity, "#berlin");
}

function attachTinyTardisListener() {
  let tinyTardis = document.querySelector("#tiny-tardis");
  tinyTardis.addEventListener("click", backToStart);
}

function backToStart() {
  let placeholder = document.querySelector("#body");
  placeholder.innerHTML = ` 
      <div id="tardis">
      <img
        id="click-me"
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/155/275/original/tardis.png?1737396195"
        alt="tardis"
      />
    </div>
`;
  let tardis = document.querySelector("#click-me");
  tardis.addEventListener("click", showClock);
}
