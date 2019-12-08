// Скрипт, который принимает название файла в качестве аргумента
// и убирает все лишние пробелы (больше одного), сохраняет новый файл
// в виде 'converted_' + fileName. При завершении работы скрипта, 
// показывает время, за которое он отработал.

console.time()
const fileName = process.argv[2]

function spacesMerger(fileName) {

	const fs = require('fs');
	fs.readFile(fileName, 'utf8', (err, data) => {
	
		let cleanedData = data.replace(/ +/g, ' ');
		
		const newFile = 'converted_' + fileName;
		fs.writeFile(newFile, cleanedData, () => { console.timeEnd() });
	
	});
	
};

spacesMerger(fileName);
