// 📦 Musisz zaimportować tutaj moduł 'http'.
const http = require('http');

// 📦 Żeby użyć tutaj PORT, musisz zaimportować go z modułu konfiguracyjnego z pliku 'config.js'.
const { PORT } = require('./config');

// 📦 Zaimportuj funkcję 'requestRouting' z modułu 'routing/routing.js'.
const requestRouting = require('./routing/routing');

// 🏗 Tutaj, stwórz funkcję 'requestListener', która przekazuje 'request' i 'response' do 'requestRouting'.
const requestListener = (request, response) => {
    requestRouting(request, response);
};

// 🏗 Tutaj, stwórz serwer Node.js. Pamiętaj przypisać go do stałej i przekazać mu 'requestListener'.
const server = http.createServer(requestListener);

// 🏗 Uruchom serwer na porcie PORT.
// Podpowiedź: server.listen(???);
server.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
