// Написать функцию сложения 2 чисел, которую можно вызывать так:
// add(5)(10); // 15
// add(2)(2); // 4

function add(n) {
    return function(m) {
    	return n + m;
    }
};


// Сделать возможным следующий синтаксис:
// 1. var a = (5).plus(3).minus(6); //2. 
Number.prototype.plus = function(b) { return this + b; }
Number.prototype.minus = function(b) { return this - b; }

// 2. [1,2,3].startsWith(1); // true
Array.prototype.startsWith = function(ch){ return this[0] === ch; }
