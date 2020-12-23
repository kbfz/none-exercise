const express = require('express')

const app = express();
const port = 3000;
const hostname = '192.168.1.212';

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port,() => console.log(`Example app listening on port ${port}!`))