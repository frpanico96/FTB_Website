import express from 'express';
import bodyParser from 'body-parser';
import Home from '../home/home';


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));