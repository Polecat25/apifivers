import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    author: {
        type: String,
        require: true,       
    },
    title:{
        type: String, 
        required: true
    } ,
    description: {
        type: String,
    },
    image: {
        type: String, 
        require: true
    }
},
{
    timestamps:true,
    versionKey:false
})

const Posts = mongoose.model('posts', postSchema)
export default Posts