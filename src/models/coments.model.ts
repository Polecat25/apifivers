import mongoose, { Schema } from "mongoose";

const comentSchema = new Schema({
    author: {
        type: String,
        
    },
    message:{
        type: String, 
        required: true
    } ,
    idfrom: {
        type: String,
        require:true
    },
    
},
{
    timestamps:true,
    versionKey:false
})

const Coments = mongoose.model('coments', comentSchema)
export default Coments