'use strict';

function Cleaner() {
}

Cleaner.prototype.clean = function(text) {
    return text.replace(/["]/g,"");
};

module.exports = Cleaner;
