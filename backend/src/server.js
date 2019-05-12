const express = require("express");
let cors = require("cors");
const bodyParser = require("body-parser");
const produto = require("./controller/produtoController.js");
const mongoose = require("mongoose");

const api = express();

api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/produto", { useNewUrlParser: true, useFindAndModify: false });
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

api.use('/produto', produto);

api.listen(3001, () => console.log("Server iniciado na porta 3001"));