
var anmlCat = new com.idc.Animal('cat');

var com = com || {};
    com.idc = com.idc || {};

var com.idc.Animal = function(type) {
    console.log("Animal type is: "+type);
}

com.idc.Animal.prototype.version = "1.00";

console.log("version "+com.idc.Animal.prototype.version);
