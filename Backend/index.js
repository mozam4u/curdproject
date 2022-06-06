import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';
import Routes from './server/routes.js';


const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use('/', Routes);


const PORT = 8080;
const dbcon = process.env.DATABASE_URL;



Connection(dbcon);

app.listen(PORT, () => console.log(`SERVER IS RUNNNIUNG SUCCESFULLY ON PORT ${PORT}`));