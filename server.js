const express = require('express');
const app = express();
const multer = require('multer');
const mimeTypes = require('mime-types');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb){
        name_original = file.originalname.replace(`.${mimeTypes.extension(file.mimetype)}`,'');
        cb('', `${Date.now()}-${name_original}.${mimeTypes.extension(file.mimetype)}`);
    }
});

const upload = multer({
    storage: storage
});

app.get('/', (req,res) => {
    // res.send('Hola mundo');
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/files', upload.single('avatar') ,(req, res) => {
    res.send('Todo bien!');
})

app.listen(8080, () => console.log('Server iniciado en el puerto 8080'));