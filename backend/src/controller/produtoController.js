const express = require("express");
const router = express.Router();
const Produto = require ("../model/produto");

router.get("/", (req, res) => {
    Produto.find( req.body , (err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    })
})

router.get("/:nomeProduto", (req, res) => {
    let nome = req.params.nomeProduto;
    Produto.find(
        { nome: { $regex: `${nome}`, $options: 'i' }}, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    })
})

router.post("/", (req, res) => {
    let produto = new Produto(req.body);
    produto.save( err => {
        if (err) return res.json({ success: false, error: err });
        return res.status(200).send({ success: true });
    })
})

router.put("/", (req, res) => {
    let { id, produto } = req.body;
    Produto.findOneAndUpdate( id , produto , err => {
        if (err) return res.json({ success: false, error: err });
        return res.status(200).send({ success: true });
    })
})

router.delete("/:id", (req, res) => {
    Produto.findByIdAndDelete( req.params.id ,err => {
        if (err) return res.json({ success: false, error: err });
        return res.status(200).send({ success: true });
    })
})

module.exports = router;