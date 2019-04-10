//

const Animal = require('./animal');
const selectFood = require('./utils');

class Tiger extends Animal {
	// constructor(howMany) {
	// 	super(howMany);
	// }

	sleep() {
		console.log('Tiger Sleep');
		this.energy += 5;
	}

	eatFood() {
		console.log('Tiger Eating ', selectFood(3));
		this.energy += 5;
	}
}

module.exports = Tiger;
