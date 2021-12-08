// Assets
const newConfirmed = document.querySelector("#gd-newconfirmed")
const newDeath =     document.querySelector("#gd-newdeaths")
const totalCases =   document.querySelector("#gd-totalcases")
const totalDeath =   document.querySelector("#gd-totaldeath")

// the function that get global data and put them on dom 
const getGlobalData = (globalData)=>{
    newConfirmed.innerHTML = globalData.NewConfirmed
    newDeath.innerHTML =     globalData.NewDeaths
    totalCases.innerHTML =   globalData.TotalConfirmed
    totalDeath.innerHTML =   globalData.TotalDeaths
}

// the function that get data by country name and put them on dom 
const getCountryData = (countryData)=>{
    console.log(countryData)
}