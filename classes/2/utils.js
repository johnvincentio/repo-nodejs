//

function selectFood(maxfood) {
	const random = Math.floor(Math.random() * maxfood) + 1;
	// console.log('randomFood; random ', random);
	switch (random) {
		case 1:
			return 'Meat';
		case 2:
			return 'Fish';
		case 3:
			return 'Bugs';
		case 4:
		default:
			return 'Grain';
	}
}

module.exports = selectFood;
