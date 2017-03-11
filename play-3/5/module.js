'use strict';

module.exports = function(arg) {
    if (arg instanceof string) {
        return doStringThing.apply(this, arguments);
    }
    else if (arg instanceof Number) {
        return doNumberThing.apply(this, arguments);
    }
    else {
        return doObjectThing.apply(this, arguments);
    }
};

function doStringThing(text) {
    console.log("-- doStringThing; "+text);
}
function doNumberThing(text) {
    console.log("-- doNumberThing; "+text);
}
function doObjectThing(text) {
    console.log("-- doObjectThing; "+text);
}
