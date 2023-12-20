const express = require ('express');
const router = express.Router();
const bukuRouterService = require ('../service/bukuRouterService');

router.get ('/api/buku', async function (req, res, next){
    try{
        res.json(await bukuRouterService.getMultiple(req.query.page));
    } catch (err){
        console.error('Error mengambil data buku',err.massage);
        next(err)
    }
})

router.post ('/api/tambahBuku', async function (req, res, next){
    try{
        res.json(await bukuRouterService.create(req.body));
    } catch (err){
        console.error('Error membuat data buku',err.massage);
        next(err)
    }
})

router.put('/api/updateBuku/:id', async function(req, res, next) {
    try{
        res.json (await bukuRouterService.update(req.params.id, req.body)) 
    } catch (err) {
        console.error("Error UPADTE data Buku", err.message)
        next(err)
    }
})

router.delete('/api/deleteBuku/:id', async function(req, res, next) {
    try {
        res.json(await bukuRouterService.hapus (req.params.id))
    } catch (err) {
        console.error('Error saat hapus data buku', err.message)
        next(err)
    }
})
module.exports = router