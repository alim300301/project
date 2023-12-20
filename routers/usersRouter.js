const express = require ('express');
const router = express.Router();
const usersRouterService = require ('../service/usersRouterService');

router.get ('/api/users', async function (req, res, next){
    try{
        res.json(await usersRouterService.getMultiple(req.query.page));
    } catch (err){
        console.error('Error mengambil data user',err.massage);
        next(err)
    }
});

router.post ('/api/tambahUser', async function (req, res, next){
    try{
        res.json(await usersRouterService.create(req.body));
    } catch (err){
        console.error('Error membuat data User',err.massage);
        next(err)
    }
})

router.put('/api/updateUser/:id', async function(req, res, next) {
    try{
        res.json (await usersRouterService.update(req.params.id, req.body)) 
    } catch (err) {
        console.error("Error UPADTE data User", err.message)
        next(err)
    }
})

router.delete('/api/deleteUser/:id', async function(req, res, next) {
    try {
        res.json(await usersRouterService.hapus (req.params.id))
    } catch (err) {
        console.error('Error saat hapus data User', err.message)
        next(err)
    }
})
module.exports = router