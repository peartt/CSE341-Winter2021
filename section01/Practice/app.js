const http = require('http');

function rqListener(req, res) {
    const url = req.url;
    const method = req.method;
    //home text will prompt the user to input a 'username'
    if (url === '/')
    {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<p>Add a username to the list</p>');
        res.write('<body><form action = "/create-user" method = "POST">');
        res.write('<input type= "text" name = "user">');
        res.write('<button type="submit">Send</button></br>');
        res.write('<a href= "/users">See our users</a>');
        res.write('</form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method == 'POST')
    {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location','/users');
            return res.end();
        });        
    }
    if (url === '/users')
    {
        res.setHeader('Conetent-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><h1>Here is some users</h1>');
        res.write('<ul><li>Username 1</li> <li>Username 2</li></ul></br>');
        res.write('<a href = "/">Back to home</a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    //default
    res.setHeader('Conetent-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Default Page</title></head>');
    res.write('<body><h1>Here is some basic text</h1></body>');
    res.write('</html>');
    res.end();
}

const server = http.createServer(rqListener);
server.listen('3030');