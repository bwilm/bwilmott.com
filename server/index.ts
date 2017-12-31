import api from './procedures/api';
import * as express from 'express';

import * as path from 'path';



let routing = require('./middleware/routing.mw.js');


let clientPath = path.join(__dirname, '../client');
let dataPath = path.join(__dirname, 'data.json');


let app = express();
app.use(express.static(clientPath));



app.use('/api', api);

app.get('*', routing.stateRouting);






console.log('listening')
app.listen(process.env.PORT || 3000);