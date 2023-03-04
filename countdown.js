console.log('hey')

const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const datetoreach = "8 dec 2023"
const newyear = new Date(datetoreach)

function countdown() {
    const curentdate = new Date()
    const diff = newyear - curentdate;

    const totalseconds = Math.floor(diff / 1000);


    const minutere = Math.floor(totalseconds / 60) % 60;
    const hourre = Math.floor(totalseconds / 3600) % 24;
    const dayre = Math.floor(totalseconds / 3600 / 24);

    const secondre = Math.floor(totalseconds) % 60
    // console.log(minutere)
    // console.log(hourre)
    // console.log(dayre)
    // console.log(secondre)


    days.innerHTML = formattime(dayre);
    hours.innerHTML = formattime(hourre)
    minutes.innerHTML = formattime(minutere)
    seconds.innerHTML = formattime(secondre)
}
function formattime(time){
    return time<10 ? `0${time}` : time;
}

// countdown()
setInterval(() => {

    countdown()
}, 1000);