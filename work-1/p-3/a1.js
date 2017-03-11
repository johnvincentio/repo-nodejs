'use strict';

var ABC = ABC || {};

ABC.Subspace = {

    do_1 : function() {
        console.log("--- ABC.Subspace.do_1");
	},
	
	do_2 : function(par1, par2) {
		console.log("--- ABC.Subspace.do_2; par1 " + par1 + " par2 " + par2);
        return par1 + " , " + par2;
	}
};
