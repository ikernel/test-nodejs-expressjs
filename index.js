const express = require('express');
const app = express();
const rutas = require("./routes/rutas.js");
/*const body_parser = require('body-parser');*/
const formidable = require('express-formidable');
const jade = require('jade');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');

const port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('./static'));
app.use(formidable({
    encoding: 'utf-8',
    uploadDir: './static/uploads',
    keepExtensions: true,
    multiples: true
}));
cloudinary.config({
    cloud_name: 'pipo88',
    api_key: '789671369223317',
    api_secret: 'YptKPHYhG3eNiNDInLiYiuzmDaA'
})
/*app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));*/

app.use('/', rutas);

mongoose.connect('mongodb://test:Passw0rd@ds125481.mlab.com:25481/test_programadores_chile', error => {
    console.log(error || "Conexión existosa a la BD")
});

app.listen(port, error => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server running port ${port}`);
    }
});
