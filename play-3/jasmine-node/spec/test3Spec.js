'use strict';

require("../src/test3.js");

describe ("test3Spec", function() {
    var cleaner;

    beforeEach (function() {
        console.log("beforeEach");
        cleaner = new Cleaner();
    });

    afterEach (function() {
        console.log("afterEach");
    });

    it ("test 1", function () {
        var text = cleaner.clean('te"st " see');
        console.log("text :"+text+":");
        expect(text).toBeDefined();
        expect(text).toEqual('test  see');
    });
});
