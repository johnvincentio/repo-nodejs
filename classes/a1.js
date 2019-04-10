//

class Animal {
	constructor(howMany) {
		this.howMany = howMany;
		this.energy = 0;
	}

	makeSound() {
		this.energy -= 3;
	}

	eatFood() {
		this.energy += 5;
	}

	sleep() {
		this.energy += 10;
	}
}

class Tiger extends Animal {
	constructor(howMany) {
		super(howMany);
	}

	sleep() {
		this.energy += 5;
	}
}

class Monkey extends Animal {
	constructor(howMany) {
		super(howMany);
	}

	makeSound() {
		this.energy -= 4;
	}

	eatFood() {
		this.energy += 2;
	}

	play() {
		if (this.energy >= 8) {
			this.energy -= 8;
			console.log('Oooo Oooo Oooo');
		} else {
			console.log('Monkey is too tired');
		}
	}
}

class Snake extends Animal {
	constructor(howMany) {
		super(howMany);
		this.play = false;
	}
}

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

const tigers = new Tiger(3);
const monkies = new Monkey(10);
const snakes = new Snake(25);

const jungle = new Jungle(tigers, monkies, snakes);
jungle.test();

// jungle.soundOff();

// jungle.test();

monkies.play();
monkies.eatFood();
jungle.test();

monkies.eatFood();
monkies.eatFood();
monkies.eatFood();
jungle.test();
monkies.play();
jungle.test();
