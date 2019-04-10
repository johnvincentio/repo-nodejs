//

class Jungle {
	constructor(tigers, monkies, snakes) {
		this.tigers = tigers;
		this.monkies = monkies;
		this.snakes = snakes;
	}

	soundOff() {
		this.tigers.makeSound();
		this.monkies.makeSound();
		this.snakes.makeSound();
	}

	test() {
		console.log('test; ', this.tigers, this.monkies, this.snakes);
	}
}

module.exports = Jungle;
