/**
 * app 文件
 * */

import express from 'express';
import { getData } from './models/db';
const app = express();

app.get('/', (req, res) => {
    res.json(getData());
})

app.listen(5000);

