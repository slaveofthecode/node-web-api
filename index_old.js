import dotenv from 'dotenv';
import http from 'http';

dotenv.config();

const {
    HTTP_PORT,
} = process.env;

const server = http.createServer((req, res) => {
    
    const { method } = req;

    switch(method) {
        case 'GET':
            res.end('Hola mundo desde nodejs ');
            break;
        case 'POST':
            res.end('Hola mundo desde nodejs POST');
            break;
        case 'PUT':
            res.end('Hola mundo desde nodejs PUT');
            break;
        case 'DELETE':
            res.end('Hola mundo desde nodejs DELETE');
            break;
        default:
            res.end('Hola mundo desde nodejs ');
            break;
    }


    // res.end('Hola mundo desde nodejs ');
    // res.end(JSON.stringify(req.method, null, 4));

});

server.listen(HTTP_PORT, () => {
    console.log(`Server on port ${HTTP_PORT}`);
});


