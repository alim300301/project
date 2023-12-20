const express = require('express') 
const app = express()

const bukuRouter = require('./routers/bukuRouter') 
const usersRouter = require('./routers/usersRouter') 
app.use(express.json())
app.use(
    express.urlencoded ({extended:true})
);

app.use('/', bukuRouter);
app.use('/', usersRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message: err.message})
})
app.get('/', function (req,res){
    res.send ('Hello Mahasiswa SM3.1 Selamat Belajar Express js')
})
app.listen (5000,function(){
    console.log('Server Berjalan Dengan Lancar')
})