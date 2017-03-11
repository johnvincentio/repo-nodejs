var abc = new Animal('cat');

function Animal(type) {
    console.log("Animal type is: "+type);
}

Animal.prototype.version = "1.00";

console.log("version "+Animal.prototype.version);
