import { Schema,  model } from "mongoose";
import { user } from "../interfaces/user.interface";



const UserSchema = new Schema<user>(
    
    {
        nombre:{
            type: String,
            required:true
        }, 
        pass: {
            type: String,
            required:true
            
        }, 
        email: {
            type: String,
            required:true,
            unique:true
        },
        role: {
            type: String,
            required:true            
        }
       
       
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const UserMOdel = model("users", UserSchema)
export default UserMOdel