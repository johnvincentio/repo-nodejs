// 'use strict';

var ABC = ABC || {};

ABC.abcd = {

    do_1 : function() {
        console.log("--- ABC.Subspace.do_1");
	},
	
	do_2 : function(name, path) {
		console.log("--- ABC.Subspace.do_2; name " + name + " path " + path);
	}
};

function test1() {
    ABC.abcd.do_1();
}

ABC.abcd.do_1();

// test1();
