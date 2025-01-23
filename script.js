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
      <div class="citygroup">
        <div id="blockLeft">
          <h2 id="city">Los Angeles</h2>
          <div id="date">August 15th 2024</div>
        </div>
        <div id="block-right">
          <div id="time">1:34:23</div>
        </div>
      </div>
      <div class="citygroup">
        <div id="blockLeft">
          <h2 id="city">Tokyo</h2>
          <div id="date">August 15th 2024</div>
        </div>
        <div id="block-right">
          <div id="time">1:34:23</div>
        </div>
      </div>
      <footer>
        This project was coded by Sonja and is open-sourced on
        <a href="https://github.com/itsSonchan/WorldClockAddOn">Github</a>
      </footer>
    </div>
    `;
}
