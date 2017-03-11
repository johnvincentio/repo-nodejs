'use strict';

(function(exports) {

    exports.Cleaner = function() {};

    exports.Cleaner.prototype.clean = function(text) {
        return text.replace(/["]/g, "");
    };

}(typeof exports === "undefined" ? (this.moduleName = {}) : exports));
