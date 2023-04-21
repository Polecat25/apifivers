import 'dotenv/config'
import mongoose, { connect } from 'mongoose'

const DB_URI = <string>process.env.MONGO_DB
const  dbconnect = async ()=>{
    try {    
    await  mongoose.connect(DB_URI)

    } catch (e) {
        throw new Error("Error en la conexion:" + e);
       
    }
}


export default dbconnect