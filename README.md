# **Meu Primeiro GIT 👩🏻‍💻👨🏻‍💻**  

## **📌 Primeiros Passos**  
Para iniciar no projeto, siga os passos abaixo:  

### **1️⃣ Instalar Node.js e npm**  
Verifique se você já tem o Node.js instalado executando:  
```sh
node -v
```
Se não estiver instalado, siga as instruções abaixo para instalar:  

🔹 **Linux (Ubuntu/Debian)**  
```sh
sudo apt update && sudo apt install nodejs npm -y
```

🔹 **Windows**  
Baixe e instale a versão mais recente do [Node.js](https://nodejs.org/).  

🔹 **MacOS**  
Se tiver Homebrew instalado:  
```sh
brew install node
```

---

### **2️⃣ Instalar Dependências**  
Após clonar o repositório, vá até a pasta do projeto e execute:  
```sh
npm install
```
Isso garantirá que todas as dependências do projeto estejam instaladas.

---

### **3️⃣ Configurar sua página**  
Na pasta `participantes/alunos/`, crie uma subpasta com **seu nome** e adicione os arquivos abaixo:

#### ➡️ `index.html`  
Copie o modelo do `template.html` que está na raiz do projeto e personalize-o.  

#### ➡️ `info.json`  
Crie esse arquivo e adicione o seguinte conteúdo, substituindo pelo **seu nome**:  
```json
{ "name": "Nome-Sobrenome" }
```

Opcionalmente, copie `template.css` ou use **Bootstrap/Tailwind (Ou outra biblioteca de estilos da sua escolha)** para personalizar seu estilo.

---

### **4️⃣ Atualizar Lista de Participantes**  
Para garantir que seu nome apareça na lista de participantes, execute o seguinte comando na **raiz do projeto**:  

```sh
node updateParticipants.js
```

---

### **5️⃣ Iniciar o Servidor**  
Agora, rode o seguinte comando para iniciar o servidor e visualizar a página no navegador:  

```sh
node server.js
```

O projeto estará disponível em:  
👉 **http://localhost:5000**

---

### **🚀 Bons estudos e boas contribuições!**  

👨‍💻 **Criadores:**  
Alef Juan, Cesar Abreu, Igor Emanuel Roque, Gabriel Borchardt, Gabriel Seffrin e Leonardo Garcia.
