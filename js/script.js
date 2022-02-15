"use strict";

function test (num, callback) {
   console.log(num);
   callback();
}

test('5', function () {
   console.log('Следующая');
});