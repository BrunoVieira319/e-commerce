const Mongoose = require("mongoose");

const produto = new Mongoose.Schema (
    {
        nome: String,
        preco: Number,
        img: String,
        descricao: String,
        categoria: String
    }
);

module.exports = Mongoose.model("Produto", produto);