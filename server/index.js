"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./procedures/api");
const express = require("express");
const path = require("path");
let routing = require('./middleware/routing.mw.js');
let clientPath = path.join(__dirname, '../client');
let dataPath = path.join(__dirname, 'data.json');
let app = express();
app.use(express.static(clientPath));
app.use('/api', api_1.default);
app.get('*', routing.stateRouting);
console.log('listening');
app.listen(process.env.PORT || 3000);
