// Assets
const newConfirmed = document.querySelector("#gd-newconfirmed")
const newDeath =     document.querySelector("#gd-newdeaths")
const totalCases =   document.querySelector("#gd-totalcases")
const totalDeath =   document.querySelector("#gd-totaldeath")

// the function that get global data and put them on dom 
const getGlobalData = (globalData)=>{
    newConfirmed.innerHTML = globalData.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    newDeath.innerHTML =     globalData.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalCases.innerHTML =   globalData.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalDeath.innerHTML =   globalData.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// the function that get data by country name and put them on dom 
const getCountryData = (countryData)=>{
    console.log(countryData)
}