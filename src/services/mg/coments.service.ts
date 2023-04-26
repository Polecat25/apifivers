import Coments from "../../models/coments.model";

const newComment = async (data:any)=>{
    const comment = await Coments.create(data)
    return comment
}
const AllComments =  async (idpost:any)=>{
    const comments = await Coments.find({idfrom:idpost})
    return comments
}
const DeleteCommet = async (idcomment:any)=>{
    const comment = await Coments.findOneAndRemove({_id:idcomment})
    return comment
}

export {newComment, AllComments, DeleteCommet}