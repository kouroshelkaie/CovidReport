// get global data api(newCase,newDeath,totalCase,totalDeath)
let global = 
fetch("https://api.covid19api.com/summary")
    .then(response =>{
        response.json()
        .then(data=>{
        getGlobalData(data.Global)
    })
})


let country = 
fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
    .then(response =>{
        response.json()
        .then(data =>{
        getCountryData(data)
        })
    })