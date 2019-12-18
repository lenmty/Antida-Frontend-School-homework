// Используя один и тот же объект расширить counter20 и counter30 так, чтобы функции test1 и test2 всегда возвращали true:
var counter20 = { count: 20 };
var counter30 = { count: 30 };

// String(counter20); // 19
// Number(counter20); // 20
// String(counter20); // 19


// Ваш код
var counter = { 
	toString: function() { return this.count; },
	valueOf: function() { return this.count - 1; }
}

counter20.__proto__ = counter;
counter30.__proto__ = counter;


var test1 = () => counter20 + counter30 + 2 === counter20 + counter30;
var test2 = new Function(`return ${counter20} + ${counter30} - 2 === ${counter20 + counter30}`)

console.log("Test 1:", test1());
console.log("Test 2:", test2());