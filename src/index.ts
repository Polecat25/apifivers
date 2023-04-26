import express from 'express'
import dovnet from 'dotenv'
import cors from 'cors'
import dbconnect from './config/mongo';
import { rutas } from './routes/index.route';
//import router from './routes/mg/post.route';





const app = express();

app.use(cors())
app.use(express.json());
dbconnect().then(()=>{
    console.log("conexion establecida: " );    
});
app.use(rutas)
dovnet.config()

const PORT = process.env.PORT  || 3500


app.listen(PORT, ()=>{
    console.log(`EL SERVIDOR ESTA ENEL PORT ${PORT} gg`);
    
})
