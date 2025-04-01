const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

const participantesDir = path.join(__dirname, 'participantes', 'alunos');
const participantesFile = path.join(__dirname, 'participantes.json');

app.use(express.static(__dirname));

app.get('/update-participants', (req, res) => {
	let alunos = [];

	fs.readdir(participantesDir, (err, files) => {
		if (err) {
			console.error('Erro ao ler diretório:', err);
			return res.status(500).json({ error: 'Erro ao ler diretório' });
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
					const participantsJson = { alunos };

					fs.writeFile(participantesFile, JSON.stringify(participantsJson, null, 2), err => {
						if (err) {
							console.error('Erro ao escrever participants.json:', err);
							return res.status(500).json({ error: 'Erro ao escrever arquivo' });
						}
						console.log('participants.json atualizado com sucesso!');
						res.json(participantsJson);
					});
				}
			});
		});
	});
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
