'use strict';

const fs = require('fs');
const path = require('path');
const pagePath =__dirname;
//could have also written it as follow:
// const petsPath = path.join(__dirname, 'pets.json');
const express = require('express');
const app = express();


const port = process.env.PORT || 3000;


app.disable('x-powered-by');


app.use(express.static(pagePath));
// this line helps us start the server.
app.listen(port);

//JOSH"S code
/*
require('express').use('express').static('.').listen(8000, () => console.log(8008);
*/
