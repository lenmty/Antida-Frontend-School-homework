var response = { data: [
	{ score: 10, name: 'Bob', age: 18 },
	{ score: 3, name: 'Alex', age: 20 },
	{ score: 10, name: 'Vladimir', age: 32 },
	{ score: 8, name: 'Kirill', age: 22 },
	{ score: 10, name: 'Boris', age: 17 },
	{ score: 10, name: 'Martin', age: 17 },
	{ score: 5, name: 'Max', age: 28 },
	{ score: 10, name: 'Vera', age: 18 },
	{ score: 12, name: 'Lera', age: 18 },
	{ score: 10, name: 'Bobby', age: 13 }],
	toString: function(){
		let bprint = [];
		this.data.forEach( item => { bprint.push(`${item.name} - ${item.age}: ${item.score}`) });
		return bprint;
	}
}


// возвращает сумму всех очков
function totalScore(data) {
	let totalScore = 0;
	
	data.forEach( (item) => { totalScore += item.score; } );
	
	return totalScore;
};

// возвращает массив с участниками старше 18
function fullAge(data) {
	let adult = [];
	
	data.forEach( item => {
		if (item.age > 18) {
			adult.push(item);
		};
	});
	
	return adult;
};

// возвращает массив с участниками, имена которых начинаются на B 
function startsWith(data, letter) {
	let theOnes = [];
	
	data.forEach( item => {
		if (item.name.toLowerCase().startsWith(letter.toLowerCase())) {
			theOnes.push(item);
		};
	});
	
	if (theOnes.length == 0) {
		return "Таких нет :с"
	} else {
		return theOnes;
	};
};

// возвращает массив со строками вида: “Bob - 18: 10” используя метод toString, который предварительно добавлен в изначальный объект
function beautyPrint(data) {
	return data.toString();
};

// возвращает массив чисел в виде строк, суммы очков участников, сгруппированных по возрасту
function groupByAge(data) {
	let scores = {};
	
	data.forEach( item => {
		if (item.age in scores) {
			scores[item.age] += item.score;
		} else {
			scores[item.age] = item.score;
		}
	});
	
	return Object.values(scores).map(n => String(n));
};


console.log( "Сумма всех очков:", totalScore(response.data) );
console.log( "Участники старше 18 лет:", fullAge(response.data) );
console.log( "Имена начинаются на B:", startsWith(response.data, "B") );
console.log( "Форматированный вывод:", beautyPrint(response) );
console.log( "Суммы очков участников одного возраста:", groupByAge(response.data) );