// console.log("running")

const express = require('express');
const app = express();

app.get("/", () => (request, response) => {
    response.send("<h1>Hello World!</h1>");
});
//all - handles everything - get, post , put & delete

app.listen(3000, () => {console.log("Running on port 3000")})