let get_days = document.querySelector('#days');
let get_hours = document.querySelector('#hours');
let get_minutes = document.querySelector('#minutes');
let get_seconds = document.querySelector('#seconds');
console.log(get_days)


function updateTime(){
let currentDate = new Date();
let year_2 = new Date('July 14 2025 08:30:00');
let diff = year_2 - currentDate;
let day = Math.floor(diff/1000/60/60/24);
let hour = Math.floor(diff/1000/60/60)%24;
let minutes = Math.floor(diff/1000/60)%60;
let seconds = Math.floor(diff/1000)%60;
get_days.innerHTML = day<10? "0"+day:day;
get_hours.innerHTML = hour<10?'0'+hour:hour;
get_minutes.innerHTML = minutes<10?'0'+minutes:minutes;
get_seconds.innerHTML = seconds<10?'0'+seconds:seconds;
}
setInterval(updateTime,1000)