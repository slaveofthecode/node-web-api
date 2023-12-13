import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.end('Hola mundo desde express');
});
app.post('/', (req, res) => {
    res.end('Hola mundo desde express POST');
});
app.put('/', (req, res) => {
    res.end('Hola mundo desde express PUT');
});
app.delete('/', (req, res) => {
    res.end('Hola mundo desde express DELETE');
});

app.listen(process.env.HTTP_PORT, () => {
    console.log(`Server on port ${process.env.HTTP_PORT}`);
});