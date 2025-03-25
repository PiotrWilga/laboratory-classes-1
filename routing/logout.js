// 🔧 Stwórz funkcję logoutRouting, obsługującą stronę wylogowania.
const logoutRouting = (method, response) => {
    
    response.setHeader("Content-Type", "text/html");

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Shop – Logout</title>
        </head>
        <body>
            <h1>Logout</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/kill">Logout from application</a>
            </nav>
        </body>
        </html>
    `;

      response.write(htmlContent);
    response.end();
};

// 🔧 Wyeksportuj logoutRouting, aby inne moduły mogły go używać
module.exports = logoutRouting;
