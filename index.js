import dotenv from 'dotenv';
import express from 'express';
import router from './router/index.js';

dotenv.config();

const { HTTP_PORT } = process.env;

const app = express();

// app.get('/', (req, res) => {
//     res.end('Hola mundo desde express');
// });
// app.post('/', (req, res) => {
//     res.end('Hola mundo desde express POST');
// });
// app.put('/', (req, res) => {
//     res.end('Hola mundo desde express PUT');
// });
// app.delete('/', (req, res) => {
//     res.end('Hola mundo desde express DELETE');
// });

// app.use(express.json());

app.use(router);


app.listen(HTTP_PORT, () => {
    console.log(`Server on port ${process.env.HTTP_PORT}`);
});