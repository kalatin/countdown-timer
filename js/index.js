class CountdownTimer {
	constructor(dateTo, daysElem, hoursElem, minutesElem, secondsElem) {
		this.dateTo = dateTo;
		this.daysElem = daysElem;
		this.hoursElem = hoursElem;
		this.minutesElem = minutesElem;
		this.secondsElem = secondsElem;
	}

	setTime() {
		let timeDiff = this.dateTo - new Date();

		let days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
		let hours = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(timeDiff / 1000 / 60) % 60;
		let seconds = Math.floor(timeDiff / 1000) % 60;

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
			: clearInterval(this.start);
	}
}

let timer = new CountdownTimer(
	new Date('Mar 17 2023 16:03:00'),
	document.querySelector('.timer__days > .timer__number'),
	document.querySelector('.timer__hours > .timer__number'),
	document.querySelector('.timer__minutes > .timer__number'),
	document.querySelector('.timer__seconds > .timer__number')
);

timer.setTime();
setInterval(() => {
	console.log(23);
	timer.setTime();
	return;
}, 1000);
