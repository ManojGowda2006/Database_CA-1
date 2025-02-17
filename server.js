const express = require('express')
const app = express();
const connect = require('./db')
app.use(express.json());

const PORT = 3010;

connect();

app.listen(PORT, () => {
    console.log(`Server is running in the port : ${PORT}`);
})

