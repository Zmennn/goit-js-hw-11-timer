

// const targetDate = new Date('Aug 8, 2021');
// const refs = {
//     days: document.querySelector('[data-value="days"]'),
//     hours: document.querySelector('[data-value="hours"]'),
//     mins: document.querySelector('[data-value="mins"]'),
//     secs: document.querySelector('[data-value="secs"]'),
// }
// const timerId = setInterval(timeToDate, 1000, targetDate);

// function pad(number) {
//     return String(number).padStart(2, "0")
// };


// function timeToDate(targetDate) {

//     const currentDate = Date.now();
//     const timeLeft = targetDate.getTime() - currentDate;
//     if (timeLeft < 0) {

//         clearInterval(timerId);
//         return
//     };

//     const days = pad(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((timeLeft % (1000 * 60)) / 1000));

//     refs.days.textContent = days;
//     refs.hours.textContent = hours;
//     refs.mins.textContent = mins;
//     refs.secs.textContent = secs;
// }








class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours]`),
            mins: document.querySelector(`${selector} [data-value="mins]`),
            secs: document.querySelector(`${selector} [data-value="secs"]`),
        };

        // this.timerId = setInterval(this.timeToDate, 1000, this.targetDate, this.pad);
        this.init()
    }


    init() {
        const timerId = setInterval(this.timeToDate, 1000)
    }

    timeToDate() {

        const currentDate = Date.now();
        const timeLeft = this.targetDate.getTime() - currentDate;
        if (timeLeft < 0) {
            clearInterval(this.timerId);
            return
        };


        const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = pad(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((timeLeft % (1000 * 60)) / 1000));
        console.log(hours);

        this.refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.mins.textContent = mins;
        refs.secs.textContent = secs;


    }

    pad(number) {
        return String(number).padStart(2, "0")
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 12, 2021'),
});




