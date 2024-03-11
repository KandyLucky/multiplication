const http = require('http');

// Create an HTTP server that responds with multiplication tables in HTML format
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Generate HTML content for the multiplication tables
    let htmlContent = '<!DOCTYPE html>';
    htmlContent += '<html lang="en">';
    htmlContent += '<head>';
    htmlContent += '<meta charset="UTF-8">';
    htmlContent += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    htmlContent += '<title>Multiplication Tables</title>';
    htmlContent += '<style>';
    htmlContent += 'ul { display: inline-block; margin: 0; padding: 0; vertical-align: top; }';
    htmlContent += 'li { list-style: none; }';
    htmlContent += '</style>';
    htmlContent += '</head>';
    htmlContent += '<body>';
    htmlContent += '<h1>Multiplication Tables</h1>';
    
    // Generate tables from 1 to 20
    htmlContent += '<div>';
    for (let number = 1; number <= 20; number++) {
        htmlContent += `<ul><h2>Multiplication table for ${number}:</h2>`;
        for (let i = 1; i <= 10; i++) {
            htmlContent += `<li>${number} * ${i} = ${number * i}</li>`;
        }
        htmlContent += '</ul>';
    }
    htmlContent += '</div>';
    
    htmlContent += '</body>';
    htmlContent += '</html>';
    
    // Send the HTML content as the response
    res.end(htmlContent);
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
