import { Request, Response } from "express";
import { iRol } from "../../models/interfaces/rol.interface";
import { CreateRol, DeleteRol, GetAllroles, GetOnerol, UpdateRol } from "../../services/mg/role.service";
import handlerError from "../../utilities/errorHandler";

const GetTodoRol = async (req: Request, res: Response)=>{
    try {
        const dataRoles = await GetAllroles()
        if (dataRoles.length===0) {
            handlerError(res, 404, 'No hay registros' )
            return;
        }
        res.status(200).send(dataRoles)
    } catch (error:any) {
        handlerError(res, 404, 'No encontrado',error.message )
    }
}

const GetUnRol = async (req: Request, res: Response)=>{
    try {
        const {codigo} = req.params
        const dataRol = await GetOnerol(codigo)
        if (dataRol===null) {
            handlerError(res, 404, 'Rol invalido' )
            return;
        }
        res.status(200).send(dataRol)
    } catch (error:any) {
        handlerError(res, 404, 'No encontrado',error.message )
    }
}

const CrearRol = async (req: Request, res: Response)=>{
    try {
        const {descripcion, codigo, permisos}:iRol = req.body
        const nuevorol = await CreateRol({descripcion, codigo, permisos})
        res.status(200).send(nuevorol)
    } catch (error:any) {
        handlerError(res, 404, 'No se pudo crear el rol' )
    }
}

const ModificarRol = async (req: Request, res: Response)=>{
    try {
        
        const isRol = await UpdateRol(req.params.id, req.body)
        if (isRol === null) {
            handlerError(res, 400, 'No encontrado o no  se pudo actualizar' )
            return;
        }
        res.status(200).send(isRol)
    } catch (error:any) {
        handlerError(res, 400, 'No encontrado o no  se pudo actualizar',error.message )
    }
}

const BorrarRol = async (req: Request, res: Response)=>{
    try {
        const eliminarRol = await DeleteRol(req.params.id)
        if (eliminarRol===null){
            handlerError(res, 400, 'No encontrado o no se pudo eliminar')
            return;
        }
        res.status(200).send('Rol Eliminado')
    } catch (error:any) {
        handlerError(res, 404, 'No encontrado o no se pudo eliminar',error.message )
    }
}

export {GetTodoRol, GetUnRol,CrearRol,ModificarRol,BorrarRol}