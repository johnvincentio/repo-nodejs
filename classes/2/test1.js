//

const Tiger = require('./tiger');
const Monkey = require('./monkey');
const Snake = require('./snake');

const Jungle = require('./jungle');

// import Tiger from './tiger';
// import Monkey from './monkey';
// import Snake from './snake';

const tigers = new Tiger(3);
const monkies = new Monkey(10);
const snakes = new Snake(25);

const jungle = new Jungle(tigers, monkies, snakes);

// jungle.test();

// jungle.soundOff();

// jungle.test();

// monkies.play();
// monkies.eatFood();
// jungle.test();

// monkies.eatFood();
// monkies.eatFood();
// monkies.eatFood();
// jungle.test();
// monkies.play();
// jungle.test();

jungle.test();
monkies.randomAct();
jungle.test();
