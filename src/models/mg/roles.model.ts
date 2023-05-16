import { Schema,  model } from "mongoose";
import { iRol } from "../interfaces/rol.interface";


const RolesSchema = new Schema<iRol>(
    
    {
        codigo:{
            type: String,
            required:true,
            unique:true
        }, 
        descripcion: {
            type: String,
            required:true            
        }, 
        permisos: {            
            type: [],
            required:true
        }
       
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const RolMOdel = model("Roles", RolesSchema)
export default RolMOdel