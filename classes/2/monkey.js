//

const Animal = require('./animal');
const selectFood = require('./utils');

class Monkey extends Animal {
	// constructor(howMany) {
	// 	super(howMany);
	// }

	makeSound() {
		console.log('Monkey Make sound');
		this.energy -= 4;
	}

	eatFood() {
		console.log('Monkey Eating ', selectFood(4));
		this.energy += 2;
	}

	play() {
		console.log('Play');
		if (this.energy >= 8) {
			this.energy -= 8;
			console.log('Oooo Oooo Oooo');
		} else {
			console.log('Monkey is too tired');
		}
	}

	randomAct() {
		const random = Math.floor(Math.random() * 4) + 1;
		// console.log('randomAct; random ', random);
		switch (random) {
			case 1:
				this.makeSound();
				break;
			case 2:
				this.eatFood();
				break;
			case 3:
				this.sleep();
				break;
			case 4:
			default:
				this.play();
				break;
		}
	}
}

module.exports = Monkey;
