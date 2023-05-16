import { Schema,  model } from "mongoose";


const Permissions = new Schema(
    
    {
        CODE:{
            type: String,
            required:true,
            unique:true
        }, 
        DESCRIP: {
            type: String,
            required:true            
        }
       
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const PermissionMOdel = model("permissions", Permissions)
export default PermissionMOdel