const table = document.querySelector('table');

function objectBuilder(table){
	
	const headers = [...table.querySelectorAll('th')];
	let keys = headers.map(h => h.textContent);  // свойства объектов

	const rows = [...table.querySelectorAll('tr')];
	let values = [];

	let objects = [];  // здесь будут объекты

	for (let i = 1; i < rows.length; i++) {
		let obj = {};
		values = [...rows[i].querySelectorAll('td')].map(r => r.textContent);
		
		for (let j = 0; j < keys.length; j++) {
			obj[keys[j]] = values[j];
		};
		
		objects.push(obj);
	};

	return objects;
};

console.table(objectBuilder(table));