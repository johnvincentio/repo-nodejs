'use strict';

require("../src/test1.js");

describe("test1Spec", function() {
    it('returns "world"', function() {
        expect(hello()).toEqual("world");
    });
});

