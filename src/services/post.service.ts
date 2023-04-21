import Posts from "../models/post.model";

const GetAllPost = async ()=>{
    const data =  await Posts.find({})
    return data
}
const GetOnePost = async (id:any)=>{
    const data =  await Posts.findOne({_id:id})
    return data
}
const NewPost = async (data:any)=>{
    const newPost =  await Posts.create(data)
    return newPost
}
const UpdatePost = async (id: any, body:any)=>{
    const dataU =  await Posts.findOneAndUpdate({_id:id}, body, {new:true})
    return dataU
}
const DeletePost = async (id:any)=>{
    const dataD =  await Posts.findOneAndRemove({_id:id})
    return dataD
}

export {GetAllPost, GetOnePost, NewPost, UpdatePost, DeletePost}