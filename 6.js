/**
* Реализовать функцию-конструктор копилки
* - номер счета - 3-х значное число, начиная с 1
* - если номер меньше трехзначного числа, слева заполняем нулями
* - состояние счета при создании, учитывается в транзакциях
*/
let takenNumbers = [];

function Moneybox(...transactions) {
	this.accountNumber = getAccountNumber();
	this.transactions = transactions;
}

/**
* реализовать получение информации о состоянии копилки
* вывод должен быть в формате
*
* ***
* Номер: 001
* На счету: 150
* Транзакции: 200, -100, 50
* ***
*/
function getMoneyboxInfo() {
	let num = this.accountNumber;

	let sum = 0;
	if(this.transactions.length > 0){
		sum = this.transactions.reduce((a, b) => a + b);
	}

	let trs = this.transactions.join(', ');

	return `***\nНомер: ${num}\nНа счету: ${sum}\nТранзакции: ${trs}\n***`;
}

/**
* реализовать добавление в копилку
*/
function addToMoneybox(n) {
	this.transactions.push(n);
}

/**
* реализовать изъятие из копилки
*/
function takeFromMoneybox(n) {
	this.transactions.push(-n);
}

const moneybox1 = new Moneybox(100);
const moneybox2 = new Moneybox;

/**
* пиши код ниже
*/

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getAccountNumber() {
	let num = getRandomInt(1, 1000);

	while(takenNumbers.indexOf( num ) != -1) {
		num = getRandomInt(1, 1000);
	}
	takenNumbers.push(num);

	num = String(num);
	return num.padStart(3, "0");
}

let add100ToMoneybox1 = addToMoneybox.bind(moneybox1, 100);
let addToMoneybox2 = addToMoneybox.bind(moneybox2);
let take250FromMoneybox2 = takeFromMoneybox.bind(moneybox2, 250);
let take10FromMoneybox1 = takeFromMoneybox.bind(moneybox1, 10);

// let moneybox1Info = getMoneyboxInfo.call(moneybox1);
// let moneybox2Info = getMoneyboxInfo.call(moneybox2);
/**
* пиши код выше
*/


/**
* используя addToMoneybox и takeFromMoneybox определи следующие функции
*/
add100ToMoneybox1() // добавит 100 в moneybox1
addToMoneybox2(500);    // добавит 500 в moneybox2
take250FromMoneybox2(); // изымает 250 из moneybox2
take10FromMoneybox1();  // изымает 10 из moneybox1


/**
* используя getMoneyboxInfo определи следующие переменные
*/
let moneybox1Info = getMoneyboxInfo.call(moneybox1);
let moneybox2Info = getMoneyboxInfo.call(moneybox2);

console.log(moneybox1Info);
console.log(moneybox2Info);
