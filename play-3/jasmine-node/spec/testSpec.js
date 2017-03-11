'use strict';

require("../src/test.js");

describe("testSpec", function() {
    it('returns "world"', function() {
        expect(hello()).toEqual("world");
    });
});
