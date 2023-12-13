const express = require ('express') 
const app = express()

app.get('/', function (req, res) {
res.send('Hello Saya Alim Sujito Mahasiswa SM 3.1 Siap Belajar Express Js!!')
})

app.listen(5000, function(){
})

console.log('server berjalan lancar')