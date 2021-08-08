const targetDate = new Date('Aug 9, 2021');
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}
const timerId = setInterval(timeToDate, 1000, targetDate);

function pad(number) {
    return String(number).padStart(2, "0")
};


function timeToDate(targetDate) {

    const currentDate = Date.now();
    const timeLeft = targetDate.getTime() - currentDate;
    if (timeLeft < 0) {
        clearInterval(timerId);
        return
    };

    const days = pad(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((timeLeft % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}
