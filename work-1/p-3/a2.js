'use strict';

var DEF = DEF || {};

DEF.Subspace = {

    do_3 : function() {
        console.log("--- DEF.Subspace.do_3");
	},

    do_4 : function(par1, par2) {
		console.log("--- DEF.Subspace.do_4; par1 " + par1 + " par2 " + par2);
        return par1 + " , " + par2;
	}
};
