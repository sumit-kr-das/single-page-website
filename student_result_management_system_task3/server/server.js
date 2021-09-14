import express from 'express';
const app = express();
import { port } from './config';
import router from './routes';


app.use('/api',router);



app.listen(port,()=>console.log(`Listening on port no ${port}`));