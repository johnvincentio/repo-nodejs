//

//

/* global describe, it, beforeEach */

const should = require('chai').should();

const Tiger = require('../tiger');
const Monkey = require('../monkey');
const Snake = require('../snake');

const Jungle = require('../jungle');

let tigers = null;
let monkies = null;
let snakes = null;

let jungle = null;

describe('test', () => {
	beforeEach(() => {
		tigers = new Tiger(3);
		monkies = new Monkey(10);
		snakes = new Snake(25);

		jungle = new Jungle(tigers, monkies, snakes);
	});

	it('soundOff', () => {
		jungle.soundOff();
		tigers.energy.should.equal(-3);
		monkies.energy.should.equal(-4);
		snakes.energy.should.equal(-3);
	});

	it('eatFood', () => {
		tigers.eatFood();
		monkies.eatFood();
		snakes.eatFood();
		tigers.energy.should.equal(5);
		monkies.energy.should.equal(2);
		snakes.energy.should.equal(5);
	});

	it('sleep', () => {
		tigers.sleep();
		monkies.sleep();
		snakes.sleep();
		tigers.energy.should.equal(5);
		monkies.energy.should.equal(10);
		snakes.energy.should.equal(10);
	});

	it('play 1', () => {
		monkies.energy.should.equal(0);
		monkies.play();
		monkies.energy.should.equal(0);
	});

	it('play 2', () => {
		monkies.energy.should.equal(0);
		monkies.eatFood();
		monkies.energy.should.equal(2);

		monkies.play();
		monkies.energy.should.equal(2);
	});

	it('play 3', () => {
		monkies.energy.should.equal(0);
		monkies.eatFood();
		monkies.eatFood();
		monkies.eatFood();
		monkies.eatFood();
		monkies.energy.should.equal(8);

		monkies.play();
		monkies.energy.should.equal(0);
	});
});
