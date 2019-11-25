const headers = [...document.querySelectorAll('table th')];
let keys = headers.map(h => h.textContent);  // свойства объектов

const rows = [...document.querySelectorAll('table tr')];
let values = [];

let table = [];  // здесь будут объекты

for (let i = 1; i < rows.length; i++) {
	let obj = {};
	values = [...rows[i].querySelectorAll('td')].map(r => r.textContent);
	
	for (let j = 0; j < keys.length; j++) {
		obj[keys[j]] = values[j];
	};
	
	table.push(obj);
};

console.table(table)