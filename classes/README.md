# OO Challenge

Create the objects that you feel would best model a jungle using your best OO design and coding practices based on the following requirements, using your language of choice.

Be ready to submit any and all work, including partial work, at the end of one hour.

The jungle contains several species of animals; tigers, monkeys and snakes.

All animals can do three things, make a sound, eat food, and sleep.

Each species of animal knows how many others of its kind exist.

By default, when an animal's energy level changes, it changes in the following ways:
-3 for making a sound
+5 for eating food
+10 for sleeping

The jungle can perform a sound off. This involves all of the animals in the jungle each making their sound, along with reporting their energy level.

Tigers get +5 energy for sleeping.
Monkeys get +2 energy for eating and -4 energy for making a sound.

Some animals have the ability to play.

Only monkeys can play. When they do they say "Oooo Oooo Oooo" and get -8 energy. If a monkey doesn't have enough energy to play they say "Monkey is too tired".

The jungle contains several types of food; meat, fish, bugs and grain.

Tigers can't eat grain because they have sensitive digestive systems.

Bonus Item: The jungle can have each animal perform a random activity out of the ones possible for that animal.

const tigers = new Tiger(3);
const monkies = new Monkey(10);
const snakes = new Snake(25);

const jungle = new Jungle(tigers, monkies, snakes);
jungle.soundOff();

jungle.test();

class Jungle {
constructor(numberTigers, numberMonkey, numberSnakes) {
this.tiger = new Tiger(numberTigers);
this.monkey = new Monkey(numberMonkey);
this.snake = new Snake(numberSnakes);
}

    soundOff() {
    	this.tiger.makeSound();
    	this.monkey.makeSound();
    	this.snake.makeSound();
    }

    tigers() {
    	return this.tiger;
    }

    test() {
    	console.log('test; ', this.tiger);
    }

}

const jungle = new Jungle(3, 10, 25);
jungle.soundOff();

jungle.test();
