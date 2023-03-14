import declOfNum from './declOfNum.js';

class CountdownTimer {
	constructor(dateTo, daysElem, hoursElem, minutesElem, secondsElem) {
		this.dateTo = dateTo;
		this.daysElem = daysElem;
		this.hoursElem = hoursElem;
		this.minutesElem = minutesElem;
		this.secondsElem = secondsElem;
		this.isCountingGo = true;
	}

	setTime() {
		let timeDiff = this.dateTo - new Date();

		let days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
		let hours = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(timeDiff / 1000 / 60) % 60;
		let seconds = Math.floor(timeDiff / 1000) % 60;

		this.daysElem.nextElementSibling.textContent = declOfNum(days, ['day', 'days', 'days']);
		this.hoursElem.nextElementSibling.textContent = declOfNum(hours, ['hour', 'hours', 'hours']);
		this.minutesElem.nextElementSibling.textContent = declOfNum(minutes, ['minute', 'minutes', 'minutes']);
		this.secondsElem.nextElementSibling.textContent = declOfNum(seconds, ['second', 'seconds', 'seconds']);

		Math.floor(timeDiff / 1000 / 60 / 60 / 24) > 0
			? (this.daysElem.textContent = String(days).padStart(2, '0'))
			: (this.daysElem.parentElement.style.display = 'none');
		Math.floor(timeDiff / 1000 / 60 / 60) % 24 > 0
			? (this.hoursElem.textContent = String(hours).padStart(2, '0'))
			: (this.hoursElem.parentElement.style.display = 'none');
		Math.floor(timeDiff / 1000 / 60) % 60 > 0
			? (this.minutesElem.textContent = String(minutes).padStart(2, '0'))
			: (this.minutesElem.parentElement.style.display = 'none');
		Math.floor(timeDiff / 1000) % 60 >= 0
			? (this.secondsElem.textContent = String(seconds).padStart(2, '0'))
			: ((this.isCountingGo = false), this.stopTimer());
	}

	stopTimer() {
		document.querySelector('.timer__block').textContent = 'END';
	}
}

let timer = new CountdownTimer(
	new Date('Mar 19 2023 16:56:00'),
	document.querySelector('.timer__days > .timer__number'),
	document.querySelector('.timer__hours > .timer__number'),
	document.querySelector('.timer__minutes > .timer__number'),
	document.querySelector('.timer__seconds > .timer__number')
);

timer.setTime();

let countdown = setInterval(() => {
	console.log(23);
	if (timer.isCountingGo) {
		timer.setTime();
	} else if (!timer.isCountingGo) {
		clearInterval(countdown);
	}
}, 1000);
