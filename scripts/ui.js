// Assets
const newConfirmed = document.querySelector("#gd-newconfirmed");
const newDeath = document.querySelector("#gd-newdeaths");
const totalCases = document.querySelector("#gd-totalcases");
const totalDeath = document.querySelector("#gd-totaldeath");
const irFlag = document.querySelector(".iran_img");
const irDeath = document.querySelector(".iran_death_data");
const irCase = document.querySelector(".iran_case_data");
const list = document.querySelector(".countries_list");
const input = document.querySelector("#search_input");

// the function that get global data and put them on dom
const getGlobalData = (globalData) => {
  newConfirmed.innerHTML = globalData.NewConfirmed.toString().replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  newDeath.innerHTML = globalData.NewDeaths.toString().replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  totalCases.innerHTML = globalData.TotalConfirmed.toString().replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  totalDeath.innerHTML = globalData.TotalDeaths.toString().replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
};

// put Data on dom function
const onDom = (data) => {
  data.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("list_item");
    let imgSrc = item.countryInfo.flag;
    let countryName = item.country;
    let countryDeath = item.deaths;

    li.innerHTML = `
            <img src="${imgSrc}">
            <p class="list_country_name">${countryName}</p>
            <p class="list_country_death">${countryDeath}</p>
        `;
    list.appendChild(li);
  });
};

// the function that get data by country name and put them on dom
const getCountryData = (countryData) => {
  // put country(iran) data on dom
  console.log(countryData);
  irFlag.setAttribute("src", countryData[95].countryInfo.flag);
  irDeath.innerHTML = countryData[95].todayDeaths;
  irCase.innerHTML = countryData[95].todayCases;

  // put all countries data on list
  onDom(countryData);

  // country filter search
  input.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    let filtered = countryData.filter((item) => {
      let lowerItem = item.country.toLowerCase();
      let lowerInput = inputValue.toLowerCase();
      return lowerItem.includes(lowerInput);
    });
    list.innerHTML = " ";
    onDom(filtered);
  });
};
