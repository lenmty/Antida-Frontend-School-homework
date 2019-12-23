// А) Создайте класс Human в котором есть свойства: 
// name;
// lastName;
// геттер , возвращающий фразу “Hello Name LastName”;
// Сеттер, устанавливающий префикс для геттера выше, например: “Hello”;

class Human {
	constructor(name, lastName) {
		// попробовать короткую запись
		this._name = name;
		this._lastName = lastName;
		this._greeting = "Hello";
	}

	get greeting() {
		return `${this._greeting} ${this._name} ${this._lastName}`;
	}

	set greeting(newGreeting) {
		newGreeting.length ? this._greeting = newGreeting : console.log("Wrong greeting");
	}

	getName() {
		return this._name;
	}
}


// Б) Создайте класс расширяющий класс выше и добавляющий свойство age и метод isAdult возвращающий true если возраст указан 18 и больше.

class Person extends Human {
	constructor(name, lastName, age) {
		super(name, lastName);
		this._age = age;
	}

	isAdult() {
		return this._age >= 18;
	}
}


// В) Создайте массив из объектов второго класса, но с различным значениям свойств. Создайте от него несколько массивов:
// Только четные
// Только совершеннолетние
// Только имена несовершеннолетних

let ram = [
	new Person("Rick", "Sanchez", 70),
	new Person("Morty", "Smith", 14),
	new Person("Summer", "Smith", 17),
	new Person("Beth", "Smith", 34),
	new Person("Jerry", "Smith", 35)
]

let even = ram.filter( (_, i) => i%2==0 );
let adult = ram.filter( person => person.isAdult() );
let underagesName = ram.filter( person => !person.isAdult() ).map( child => child.getName() );

// П.С. Проявите творческий подход, примените все возможности языка из урока. 
// П.П.С. Попробуйте пофантазировать и доработать классы через новые расширения, добавить свойства и методы, геттеры, сеттеры.
