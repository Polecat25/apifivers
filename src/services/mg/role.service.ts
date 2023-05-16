import { iRol } from "../../models/interfaces/rol.interface"
import RolMOdel from "../../models/mg/roles.model"

const GetAllroles =  async () =>{
    const getRoles = await RolMOdel.find({})
    return getRoles
}
//RUTA VALIDA CON AUTORIZACION 
const GetOnerol =  async (rol:string) =>{
    const getRol = await RolMOdel.findOne({codigo:rol})
    return getRol
}
const CreateRol = async (dataRol:iRol)=>{
    //const {codigo, descripcion, permisos } = dataRol
    const DatatoRol ={
        codigo : dataRol.codigo.trim().toUpperCase(),
        descripcion : dataRol.descripcion.trim().toUpperCase(), 
        permisos : dataRol.permisos.map(permiso=>permiso.toUpperCase().trim())
    }
    
    const newrol = await RolMOdel.create(DatatoRol)
    return newrol
}

const UpdateRol =  async (id: any, dataRol:iRol)=>{ 
    const DatatoRol ={
        codigo : dataRol.codigo.trim().toUpperCase(),
        descripcion : dataRol.descripcion.trim().toUpperCase(), 
        permisos : dataRol.permisos.map(permiso=>permiso.toUpperCase().trim())
    }
    const UpdateRol = await RolMOdel.findOneAndUpdate({_id:id}, DatatoRol, {new:true})
    return UpdateRol
}

const DeleteRol = async (idRol:any)=>{
    const Delrol = await RolMOdel.findOneAndRemove({_id:idRol})
    return Delrol
}

export {GetAllroles,GetOnerol,CreateRol,UpdateRol,DeleteRol}