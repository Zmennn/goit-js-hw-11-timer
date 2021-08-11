
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours"]`),
            mins: document.querySelector(`${selector} [data-value="mins"]`),
            secs: document.querySelector(`${selector} [data-value="secs"]`),
        };
        this.timerId = 0;

        this.init()
    }

    init() {
        this.timerId = setInterval(this.timeToDate.bind(this), 1000)
    }

    timeToDate() {

        const currentDate = Date.now();
        const timeLeft = this.targetDate.getTime() - currentDate;

        if (timeLeft < 0) {
            clearInterval(this.timerId);
            return
        };

        const days = this.pad(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((timeLeft % (1000 * 60)) / 1000));

        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }

    pad(number) {
        return String(number).padStart(2, "0")
    }
};

const firstTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 16, 2021'),
});







