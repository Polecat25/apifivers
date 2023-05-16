import mongoose, { Schema } from "mongoose";

const comentSchema = new Schema({
    id_author: {
        type: String,
        
    },
    message:{
        type: String, 
        required: true
    } ,
    idfrom: {
        type: String,
        required:true
    },
    
},
{
    timestamps:true,
    versionKey:false
})

const Coments = mongoose.model('coments', comentSchema)
export default Coments