const fs = require('fs');
const path = require('path');

const participantesDir = path.join(__dirname, 'participantes', 'alunos');
const participantesFile = path.join(__dirname, 'participantes.json');

let alunos = [];

fs.readdir(participantesDir, (err, files) => {
	if (err) {
		console.error('Erro ao ler diretório:', err);
		return;
	}

	let readCount = 0;
	files.forEach(file => {
		const infoPath = path.join(participantesDir, file, 'info.json');
		fs.readFile(infoPath, 'utf8', (err, data) => {
			if (!err) {
				const info = JSON.parse(data);
				alunos.push(info.name);
			}
			readCount++;
			if (readCount === files.length) {
				const participantsJson = {
					alunos: alunos
				};

				fs.writeFile(participantesFile, JSON.stringify(participantsJson, null, 2), err => {
					if (err) {
						console.error('Erro ao escrever participants.json:', err);
					} else {
						console.log('participants.json atualizado com sucesso!');
					}
				});
			}
		});
	});
});
