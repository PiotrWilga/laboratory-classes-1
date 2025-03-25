const STATUS_CODE = require('../constants/statusCode');

const renderAddProductPage = (response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Add Product</title>
        </head>
        <body>
            <h1>Add a New Product</h1>
            <form action="/product/add" method="POST">
                <input type="text" name="productName" placeholder="Product Name" required>
                <button type="submit">Add Product</button>
            </form>
        </body>
        </html>
    `);
    response.end();
};

const handleAddProduct = (request, response) => {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });

    request.on('end', () => {
        console.log(`INFO: Product added with data - ${body}`);
        response.statusCode = STATUS_CODE.FOUND;
        response.setHeader('Location', '/product/new');
        response.end();
    });
};

const renderNewestProductPage = (response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Newest Product</title>
        </head>
        <body>
            <h1>Newest Product</h1>
            <p>Details about the newest product will be displayed here.</p>
        </body>
        </html>
    `);
    response.end();
};

// ą
const productRouting = (method, response, url) => {
    if (url === '/product/add' && method === 'GET') {
        renderAddProductPage(response);
    } else if (url === '/product/add' && method === 'POST') {
        handleAddProduct(response);
    } else if (url === '/product/new') {
        renderNewestProductPage(response);
    } else {
        console.error(`ERROR: requested url ${url} doesn’t exist`);
        response.statusCode = STATUS_CODE.NOT_FOUND;
        response.setHeader('Content-Type', 'text/html');
        response.write(`<h1>Error 404: Page not found</h1><p>The requested URL ${url} doesn't exist.</p>`);
        response.end();
    }
};

module.exports = productRouting;
