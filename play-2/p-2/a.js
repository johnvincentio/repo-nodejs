var Constructor = function() {
  // initialize
    console.log("in constructor");
}
Constructor.prototype.publicMethod = function() {
    console.log("in publicMethod");
}
module.exports = Constructor;
