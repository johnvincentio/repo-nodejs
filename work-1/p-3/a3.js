'use strict';

var GHI = GHI || {};

GHI.Subspace = {

    do_1 : function() {
        console.log("--- GHI.Subspace.do_1");
        ABC.Subspace.do_1();
        DEF.Subspace.do_3();
	},
	
	do_2 : function(par1, par2) {
		console.log("--- GHI.Subspace.do_2; par1 " + par1 + " par2 " + par2);
        ABC.Subspace.do_2(par1, par2);
        DEF.Subspace.do_4(par1, par2);
        return par1 + " , " + par2;
	}
};
