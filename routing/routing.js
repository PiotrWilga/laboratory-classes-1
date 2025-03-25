// 📦 Zaimportuj wszystkie niezbędne funkcje i obiekty
const homeRouting = require('./home');
 const productRouting = require('./product');const logoutRouting = require('./logout');
const STATUS_CODE = require('../constants/statusCode');

const requestRouting = (request, response) => {
    const { method, url } = request;
    const date = new Date().toISOString();

    
    console.log(`INFO [${date}]: ${method} – ${url}`);

    if (url === '/') {
        homeRouting(method, response);
    } else if (url.startsWith('/product')) {
        productRouting(method, response);
    } else if (url === '/logout') {
        logoutRouting(method, response); //
    } else if (url === '/kill') {
        console.log(`PROCESS [${date}]: logout has been initiated and the application will be closed`);
        process.exit();
    } else {
        // nieznane ścieżki
        console.log(`ERROR [${date}]: requested url ${url} doesn’t exist`);
        response.statusCode = STATUS_CODE.NOT_FOUND;
        response.setHeader('Content-Type', 'text/html');
        response.write(`<h1>Error 404: Page not found</h1><p>The requested URL ${url} doesn't exist.</p>`);
        response.end();
    }
};

module.exports = requestRouting;
