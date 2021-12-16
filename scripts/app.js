// today
const date = document.querySelector(".date");
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let today = new Date();

let dayOfWeek = week[today.getDay()];
let generateDate = today.toISOString().split("T")[0];

date.innerHTML = `${dayOfWeek}  ${generateDate}`;
