import express, { json, Request, Response } from 'express'
import dovnet from 'dotenv'
import cors from 'cors'
import dbconnect from './config/mongo';
import router from './routes/post.route';





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
