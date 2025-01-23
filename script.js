let tardis = document.querySelector("#click-me");
tardis.addEventListener("click", showClock);

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
        <option value="Europe/Berlin">Berlin</option>
        <option value="Australia/Sydney">Sydney</option>
      </select>
      <div class="citygroup" id="berlin">
        <div class="blockLeft">
          <h2 class="city">Berlin</h2>
          <div class="date">August 15th 2024</div>
        </div>
        <div class="block-right">
          <div class="time">1:34:23</div>
        </div>
      </div>
      <div class="citygroup" id="tokyo">
        <div class="blockLeft">
          <h2 class="city" >Tokyo</h2>
          <div class="date">August 15th 2024</div>
        </div>
        <div class="block-right">
          <div class="time">1:34:23</div>
        </div>
      </div>
      <footer>
        This project was coded by Sonja and is open-sourced on
        <a href="https://github.com/itsSonchan/WorldClockAddOn">Github</a>
      </footer>
    </div>
    `;
  attachTinyTardisListener();

  function updateClock() {
    let berlin = document.querySelector("#berlin");
    let berlinDate = berlin.querySelector(".date");
    berlinDate.innerHTML = moment.tz("Europe/Berlin").format("MMMM Do YYYY");
    let berlinTime = berlin.querySelector(".time");
    berlinTime.innerHTML = moment.tz("Europe/Berlin").format("HH:mm:ss");

    let tokyo = document.querySelector("#tokyo");
    let tokyoDate = tokyo.querySelector(".date");
    tokyoDate.innerHTML = moment.tz("Asia/Tokyo").format("MMMM Do YYYY");
    let tokyoTime = tokyo.querySelector(".time");
    tokyoTime.innerHTML = moment.tz("Asia/Tokyo").format("HH:mm:ss");
  }
  setInterval(updateClock, 1000);
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
