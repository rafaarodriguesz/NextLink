// Dotenv
require("dotenv").config();

// Dependences
const express = require("express");
const app = express();

// Porta da API
const port = process.env.PORT

// Routes
const router = require("./routes/Router")

// App Use
app.use(express.json())

// Router
app.use(router)

app.listen(port, () => {
    console.log(`rodando na porta ${port}`);
})
