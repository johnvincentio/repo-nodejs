//

const selectFood = require('./utils');

class Animal {
	constructor(howMany) {
		this.howMany = howMany;
		this.energy = 0;
	}

	randomAct() {
		const random = Math.floor(Math.random() * 3) + 1;
		// console.log('randomAct; random ', random);
		switch (random) {
			case 1:
				this.makeSound();
				break;
			case 2:
				this.eatFood();
				break;
			case 3:
			default:
				this.sleep();
				break;
		}
	}

	makeSound() {
		console.log('Animal Make sound');
		this.energy -= 3;
	}

	eatFood() {
		console.log('Animal Eating ', selectFood(4));
		this.energy += 5;
	}

	sleep() {
		console.log('Animal Sleep');
		this.energy += 10;
	}
}

module.exports = Animal;
