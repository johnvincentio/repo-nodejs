function makeFunc() {       // function is an object
  var name = "fred";
  function displayName() {
    console.log("name "+name);
  }
  return displayName;       // returns the function as an object
}

console.log ("makeFunc() "+makeFunc());

var myFunc = makeFunc();        // a closure; a function and the environment in which it was created.
console.log("myFunc "+myFunc);

myFunc();       // executes the object
