// 'use strict';

console.log(">>> all.js");

var ABC = ABC || {};
var DEF = DEF || {};
var GHI = GHI || {};

function test1() {
    ABC.Subspace.do_1();
    console.log("concat: "+ABC.Subspace.do_2("abc", "def"));
}
function test2() {
    DEF.Subspace.do_3();
    console.log("concat: "+DEF.Subspace.do_4("ghi", "GHI"));
}
function test3() {
//    GHI.Subspace.do_1();
    console.log("concat a3: "+GHI.Subspace.do_2("xyz", "XYZ"));
}

// test1();
// test2();
test3();

console.log("<<< all.js");
