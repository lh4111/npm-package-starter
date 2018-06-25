(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.sketch2html = factory());
}(this, (function () { 'use strict';

// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
function square(x) {
  return x * x * x;
}

// This function gets included

function foo(x) {
  if (x) {
    return square(x);
  }
  return -1;
}

{
  console.log('-----');
}

var main = {
  foo: foo
};

return main;

})));
//# sourceMappingURL=sketch2html.js.map
