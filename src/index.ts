import express, { json, Request, Response } from 'express'
import dovnet from 'dotenv'
import cors from 'cors'
//import router from './src/routes/post.route';
//import dbconnect from './src/config/mongo';

import router from './routes/post.route';
import dbconnect from './config/mongo';



const app = express();

app.use(cors())
app.use(express.json());
dbconnect().then(()=>{
    console.log("conexion establecida: " );
    
});
app.use(router)
dovnet.config()

const PORT = process.env.PORT  || 3500


app.listen(PORT, ()=>{
    console.log(`EL SERVIDOR ESTA ENEL PORT ${PORT} gg`);
    
})
