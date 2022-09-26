"use strict";
function exibir() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    console.log(strings);
}
function main() {
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}
main();
