import mongoose, { Schema } from "mongoose";
import { iPost } from "../interfaces/post.interface";

const postSchema = new Schema<iPost>({
    id_author: {
        type: String,
        required: true,       
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
        required: true
    }
},
{
    timestamps:true,
    versionKey:false
})

const Posts = mongoose.model('posts', postSchema)
export default Posts