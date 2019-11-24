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
