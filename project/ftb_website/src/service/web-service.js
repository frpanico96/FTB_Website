/*import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


var app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    console.log('Form Page');
    res.render('index');
})


app.listen(300, () => {
    console.log('Server running on port 3000');
})*/